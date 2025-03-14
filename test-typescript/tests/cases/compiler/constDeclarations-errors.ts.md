constDeclarations-errors.ts
```json
{
  "type": "Program",
  "start": 29,
  "end": 342,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 37,
            "decorators": [],
            "name": "c1",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 55,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 55,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 49,
                "end": 55
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 65,
            "decorators": [],
            "name": "c3",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 69,
            "decorators": [],
            "name": "c4",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 81,
            "decorators": [],
            "name": "c5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 81,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 85,
            "decorators": [],
            "name": "c6",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForInStatement",
      "start": 119,
      "end": 141,
      "body": {
        "type": "BlockStatement",
        "start": 138,
        "end": 141,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 123,
        "end": 130,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 129,
            "end": 130,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "ObjectExpression",
        "start": 134,
        "end": 136,
        "properties": []
      }
    },
    {
      "type": "ForStatement",
      "start": 174,
      "end": 209,
      "body": {
        "type": "BlockStatement",
        "start": 206,
        "end": 209,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 178,
        "end": 190,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 184,
            "end": 190,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 184,
              "end": 186,
              "decorators": [],
              "name": "c8",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 189,
              "end": 190,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 192,
        "end": 198,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 192,
          "end": 194,
          "decorators": [],
          "name": "c8",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 197,
          "end": 198,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 200,
        "end": 204,
        "argument": {
          "type": "Identifier",
          "start": 200,
          "end": 202,
          "decorators": [],
          "name": "c8",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 244,
      "end": 270,
      "body": {
        "type": "BlockStatement",
        "start": 267,
        "end": 270,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 248,
        "end": 256,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 254,
            "end": 256,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 254,
              "end": 256,
              "decorators": [],
              "name": "c9",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 258,
        "end": 264,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 258,
          "end": 260,
          "decorators": [],
          "name": "c9",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 263,
          "end": 264,
          "raw": "1",
          "value": 1
        }
      },
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 305,
      "end": 342,
      "body": {
        "type": "BlockStatement",
        "start": 339,
        "end": 342,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 309,
        "end": 327,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 315,
            "end": 322,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 315,
              "end": 318,
              "decorators": [],
              "name": "c10",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 321,
              "end": 322,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 324,
            "end": 327,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 324,
              "end": 327,
              "decorators": [],
              "name": "c11",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 329,
        "end": 336,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 329,
          "end": 332,
          "decorators": [],
          "name": "c10",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 335,
          "end": 336,
          "raw": "1",
          "value": 1
        }
      },
      "update": null
    }
  ],
  "sourceType": "script"
}
```
