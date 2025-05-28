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
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 94,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 29,
            "end": 38,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 33,
                "end": 38,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 43,
            "end": 57,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 47,
                "end": 57,
                "id": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 52,
                  "decorators": [],
                  "name": "limit",
                  "optional": false,
                  "typeAnnotation": null
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
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 73,
                "end": 78,
                "decorators": [],
                "name": "limit",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 116,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 119,
        "end": 195,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 125,
            "end": 134,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 129,
                "end": 134,
                "id": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 139,
            "end": 153,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 143,
                "end": 153,
                "id": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 148,
                  "decorators": [],
                  "name": "limit",
                  "optional": false,
                  "typeAnnotation": null
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
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 174,
                "end": 179,
                "decorators": [],
                "name": "limit",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 197,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 217,
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 220,
        "end": 262,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 226,
            "end": 235,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 230,
                "end": 235,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
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
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 264,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 284,
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
