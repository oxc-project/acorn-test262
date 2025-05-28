__ESTREE_TEST__:PASS:
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 37,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 37,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 56,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 55,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 86,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 65,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 65,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 69,
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 81,
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
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 85,
            "decorators": [],
            "name": "c6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 119,
      "end": 141,
      "left": {
        "type": "VariableDeclaration",
        "start": 123,
        "end": 130,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 129,
            "end": 130,
            "id": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ObjectExpression",
        "start": 134,
        "end": 136,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 138,
        "end": 141,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 174,
      "end": 209,
      "init": {
        "type": "VariableDeclaration",
        "start": 178,
        "end": 190,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 184,
            "end": 190,
            "id": {
              "type": "Identifier",
              "start": 184,
              "end": 186,
              "decorators": [],
              "name": "c8",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 189,
              "end": 190,
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
        "start": 192,
        "end": 198,
        "left": {
          "type": "Identifier",
          "start": 192,
          "end": 194,
          "decorators": [],
          "name": "c8",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 197,
          "end": 198,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 200,
        "end": 204,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 200,
          "end": 202,
          "decorators": [],
          "name": "c8",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 206,
        "end": 209,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 244,
      "end": 270,
      "init": {
        "type": "VariableDeclaration",
        "start": 248,
        "end": 256,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 254,
            "end": 256,
            "id": {
              "type": "Identifier",
              "start": 254,
              "end": 256,
              "decorators": [],
              "name": "c9",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 258,
        "end": 264,
        "left": {
          "type": "Identifier",
          "start": 258,
          "end": 260,
          "decorators": [],
          "name": "c9",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 263,
          "end": 264,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 267,
        "end": 270,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 305,
      "end": 342,
      "init": {
        "type": "VariableDeclaration",
        "start": 309,
        "end": 327,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 315,
            "end": 322,
            "id": {
              "type": "Identifier",
              "start": 315,
              "end": 318,
              "decorators": [],
              "name": "c10",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 321,
              "end": 322,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 324,
            "end": 327,
            "id": {
              "type": "Identifier",
              "start": 324,
              "end": 327,
              "decorators": [],
              "name": "c11",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 329,
        "end": 336,
        "left": {
          "type": "Identifier",
          "start": 329,
          "end": 332,
          "decorators": [],
          "name": "c10",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 335,
          "end": 336,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 339,
        "end": 342,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
