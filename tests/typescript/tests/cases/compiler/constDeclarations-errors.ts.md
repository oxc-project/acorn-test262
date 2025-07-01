__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 37
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 37
        }
      ],
      "declare": false,
      "start": 29,
      "end": 38
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 49,
                "end": 55
              },
              "start": 47,
              "end": 55
            },
            "start": 45,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 55
        }
      ],
      "declare": false,
      "start": 39,
      "end": 56
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 65
          },
          "init": null,
          "definite": false,
          "start": 63,
          "end": 65
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 69
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 69
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              },
              "start": 74,
              "end": 81
            },
            "start": 71,
            "end": 81
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 81
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c6",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 85
          },
          "init": null,
          "definite": false,
          "start": 83,
          "end": 85
        }
      ],
      "declare": false,
      "start": 57,
      "end": 86
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "init": null,
            "definite": false,
            "start": 129,
            "end": 130
          }
        ],
        "declare": false,
        "start": 123,
        "end": 130
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 134,
        "end": 136
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 138,
        "end": 141
      },
      "start": 119,
      "end": 141
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c8",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 186
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 189,
              "end": 190
            },
            "definite": false,
            "start": 184,
            "end": 190
          }
        ],
        "declare": false,
        "start": 178,
        "end": 190
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c8",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 194
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 197,
          "end": 198
        },
        "start": 192,
        "end": 198
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "c8",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 202
        },
        "start": 200,
        "end": 204
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 206,
        "end": 209
      },
      "start": 174,
      "end": 209
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c9",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 256
            },
            "init": null,
            "definite": false,
            "start": 254,
            "end": 256
          }
        ],
        "declare": false,
        "start": 248,
        "end": 256
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c9",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 260
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 263,
          "end": 264
        },
        "start": 258,
        "end": 264
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 267,
        "end": 270
      },
      "start": 244,
      "end": 270
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c10",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 318
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 321,
              "end": 322
            },
            "definite": false,
            "start": 315,
            "end": 322
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c11",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 327
            },
            "init": null,
            "definite": false,
            "start": 324,
            "end": 327
          }
        ],
        "declare": false,
        "start": 309,
        "end": 327
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c10",
          "optional": false,
          "typeAnnotation": null,
          "start": 329,
          "end": 332
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 335,
          "end": 336
        },
        "start": 329,
        "end": 336
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 339,
        "end": 342
      },
      "start": 305,
      "end": 342
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 342
}
```
