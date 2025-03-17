__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 242,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 58,
        "name": "ifStatement1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 100,
        "body": [
          {
            "type": "IfStatement",
            "start": 67,
            "end": 98,
            "test": {
              "type": "AwaitExpression",
              "start": 71,
              "end": 78,
              "argument": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 80,
              "end": 86,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 82,
                  "end": 84,
                  "expression": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 92,
              "end": 98,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 94,
                  "end": 96,
                  "expression": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 129,
        "name": "ifStatement2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 132,
        "end": 171,
        "body": [
          {
            "type": "IfStatement",
            "start": 138,
            "end": 169,
            "test": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 145,
              "end": 157,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 147,
                  "end": 155,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 147,
                    "end": 154,
                    "argument": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 154,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 163,
              "end": 169,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 165,
                  "end": 167,
                  "expression": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 173,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 200,
        "name": "ifStatement3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 203,
        "end": 242,
        "body": [
          {
            "type": "IfStatement",
            "start": 209,
            "end": 240,
            "test": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 216,
              "end": 222,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 218,
                  "end": 220,
                  "expression": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 219,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 228,
              "end": 240,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 230,
                  "end": 238,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 230,
                    "end": 237,
                    "argument": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 237,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
