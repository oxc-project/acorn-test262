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
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 27,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 27,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 52,
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 101,
              "end": 104,
              "body": []
            },
            "abstract": false,
            "declare": false
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
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 118,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 119,
                  "end": 126,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
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
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 141,
                  "end": 142,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 155,
                  "end": 156,
                  "value": 1,
                  "raw": "1"
                },
                "optional": false,
                "computed": true
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
