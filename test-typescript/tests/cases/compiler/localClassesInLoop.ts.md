__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "use",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 27,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 27,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 43,
      "expression": {
        "type": "Literal",
        "start": 31,
        "end": 43,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 52,
            "name": "data",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 55,
            "end": 57,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForStatement",
      "start": 59,
      "end": 130,
      "init": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 73,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 72,
              "end": 73,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 75,
        "end": 80,
        "left": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 79,
          "end": 80,
          "value": 2,
          "raw": "2"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 82,
        "end": 85,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 84,
          "end": 85,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 130,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 93,
            "end": 104,
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 101,
              "end": 104,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExpressionStatement",
            "start": 109,
            "end": 128,
            "expression": {
              "type": "CallExpression",
              "start": 109,
              "end": 127,
              "callee": {
                "type": "MemberExpression",
                "start": 109,
                "end": 118,
                "object": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 113,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 118,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 119,
                  "end": 126,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 161,
      "expression": {
        "type": "CallExpression",
        "start": 132,
        "end": 160,
        "callee": {
          "type": "Identifier",
          "start": 132,
          "end": 135,
          "name": "use",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 136,
            "end": 159,
            "left": {
              "type": "CallExpression",
              "start": 136,
              "end": 145,
              "callee": {
                "type": "MemberExpression",
                "start": 136,
                "end": 143,
                "object": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 140,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 141,
                  "end": 142,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "operator": "===",
            "right": {
              "type": "CallExpression",
              "start": 150,
              "end": 159,
              "callee": {
                "type": "MemberExpression",
                "start": 150,
                "end": 157,
                "object": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 154,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 155,
                  "end": 156,
                  "value": 1,
                  "raw": "1"
                },
                "computed": true,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
