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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "use",
        "optional": false
      },
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
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 43,
      "expression": {
        "type": "Literal",
        "start": 31,
        "end": 43,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 52,
            "decorators": [],
            "name": "data",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 55,
            "end": 57,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForStatement",
      "start": 59,
      "end": 130,
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 130,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 93,
            "end": 104,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 101,
              "end": 104,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ExpressionStatement",
            "start": 109,
            "end": 128,
            "expression": {
              "type": "CallExpression",
              "start": 109,
              "end": 127,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 119,
                  "end": 126,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 109,
                "end": 118,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 113,
                  "decorators": [],
                  "name": "data",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 118,
                  "decorators": [],
                  "name": "push",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 73,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 73,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 72,
              "end": 73,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 75,
        "end": 80,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 79,
          "end": 80,
          "raw": "2",
          "value": 2
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 82,
        "end": 85,
        "argument": {
          "type": "Identifier",
          "start": 84,
          "end": 85,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "operator": "++",
        "prefix": true
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
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 136,
            "end": 159,
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "start": 136,
              "end": 145,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 136,
                "end": 143,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 140,
                  "decorators": [],
                  "name": "data",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 141,
                  "end": 142,
                  "raw": "0",
                  "value": 0
                }
              },
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 150,
              "end": 159,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 150,
                "end": 157,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 154,
                  "decorators": [],
                  "name": "data",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 155,
                  "end": 156,
                  "raw": "1",
                  "value": 1
                }
              },
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 132,
          "end": 135,
          "decorators": [],
          "name": "use",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
