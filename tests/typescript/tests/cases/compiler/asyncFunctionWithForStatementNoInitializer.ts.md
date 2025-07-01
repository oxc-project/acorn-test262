__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 20
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 34
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 37,
                  "end": 38
                },
                "definite": false,
                "start": 33,
                "end": 38
              }
            ],
            "declare": false,
            "start": 29,
            "end": 38
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "limit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 52
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 55,
                  "end": 57
                },
                "definite": false,
                "start": 47,
                "end": 57
              }
            ],
            "declare": false,
            "start": 43,
            "end": 57
          },
          {
            "type": "ForStatement",
            "init": null,
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 70
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "limit",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 78
              },
              "start": 69,
              "end": 78
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 83
              },
              "start": 80,
              "end": 83
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 85,
              "end": 92
            },
            "start": 62,
            "end": 92
          }
        ],
        "start": 23,
        "end": 94
      },
      "expression": false,
      "start": 0,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 116
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 130
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 133,
                  "end": 134
                },
                "definite": false,
                "start": 129,
                "end": 134
              }
            ],
            "declare": false,
            "start": 125,
            "end": 134
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "limit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 148
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 151,
                  "end": 153
                },
                "definite": false,
                "start": 143,
                "end": 153
              }
            ],
            "declare": false,
            "start": 139,
            "end": 153
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 167,
                "end": 168
              },
              "start": 163,
              "end": 168
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 171
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "limit",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 179
              },
              "start": 170,
              "end": 179
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 184
              },
              "start": 181,
              "end": 184
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 186,
              "end": 193
            },
            "start": 158,
            "end": 193
          }
        ],
        "start": 119,
        "end": 195
      },
      "expression": false,
      "start": 96,
      "end": 195
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 217
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 231
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 234,
                  "end": 235
                },
                "definite": false,
                "start": 230,
                "end": 235
              }
            ],
            "declare": false,
            "start": 226,
            "end": 235
          },
          {
            "type": "ForStatement",
            "init": null,
            "test": null,
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 251
              },
              "start": 248,
              "end": 251
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 253,
              "end": 260
            },
            "start": 240,
            "end": 260
          }
        ],
        "start": 220,
        "end": 262
      },
      "expression": false,
      "start": 197,
      "end": 262
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 279,
        "end": 284
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": null,
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 302,
              "end": 309
            },
            "start": 293,
            "end": 309
          }
        ],
        "start": 287,
        "end": 311
      },
      "expression": false,
      "start": 264,
      "end": 311
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 311
}
```
