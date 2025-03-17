__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 311,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "name": "test1",
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
        "start": 23,
        "end": 94,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 29,
            "end": 38,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 33,
                "end": 38,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 37,
                  "end": 38,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 43,
            "end": 57,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 47,
                "end": 57,
                "id": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 52,
                  "name": "limit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 55,
                  "end": 57,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 62,
            "end": 92,
            "init": null,
            "test": {
              "type": "BinaryExpression",
              "start": 69,
              "end": 78,
              "left": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 73,
                "end": 78,
                "name": "limit",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 80,
              "end": 83,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 85,
              "end": 92,
              "body": []
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
      "start": 96,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 116,
        "name": "test2",
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
        "start": 119,
        "end": 195,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 125,
            "end": 134,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 129,
                "end": 134,
                "id": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 133,
                  "end": 134,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 139,
            "end": 153,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 143,
                "end": 153,
                "id": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 148,
                  "name": "limit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 151,
                  "end": 153,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 158,
            "end": 193,
            "init": {
              "type": "AssignmentExpression",
              "start": 163,
              "end": 168,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 167,
                "end": 168,
                "value": 1,
                "raw": "1"
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 170,
              "end": 179,
              "left": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 174,
                "end": 179,
                "name": "limit",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 181,
              "end": 184,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 186,
              "end": 193,
              "body": []
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
      "start": 197,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 217,
        "name": "test3",
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
        "start": 220,
        "end": 262,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 226,
            "end": 235,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 230,
                "end": 235,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 234,
                  "end": 235,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 240,
            "end": 260,
            "init": null,
            "test": null,
            "update": {
              "type": "UpdateExpression",
              "start": 248,
              "end": 251,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 253,
              "end": 260,
              "body": []
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
      "start": 264,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 284,
        "name": "test4",
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
        "start": 287,
        "end": 311,
        "body": [
          {
            "type": "ForStatement",
            "start": 293,
            "end": 309,
            "init": null,
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 302,
              "end": 309,
              "body": []
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
