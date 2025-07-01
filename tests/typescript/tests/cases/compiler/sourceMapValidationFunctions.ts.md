__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "greetings",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 16,
            "end": 17
          },
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "greet",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 33
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "greeting",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 44,
              "end": 50
            },
            "start": 42,
            "end": 50
          },
          "start": 34,
          "end": 50
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 53,
          "end": 59
        },
        "start": 51,
        "end": 59
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "greetings",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 75
              },
              "start": 66,
              "end": 77
            },
            "directive": null,
            "start": 66,
            "end": 78
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "greetings",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 99
            },
            "start": 83,
            "end": 100
          }
        ],
        "start": 60,
        "end": 102
      },
      "expression": false,
      "start": 19,
      "end": 102
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "greet2",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 118
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "greeting",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 129,
              "end": 135
            },
            "start": 127,
            "end": 135
          },
          "start": 119,
          "end": 135
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 138
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 141,
            "end": 143
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 143
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 149,
              "end": 155
            },
            "start": 147,
            "end": 155
          },
          "start": 145,
          "end": 155
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 170
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 172,
                "end": 178
              },
              "start": 172,
              "end": 180
            },
            "start": 170,
            "end": 180
          },
          "value": null,
          "start": 157,
          "end": 180
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 183,
          "end": 189
        },
        "start": 181,
        "end": 189
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "greetings",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 205
              },
              "start": 196,
              "end": 207
            },
            "directive": null,
            "start": 196,
            "end": 208
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "greetings",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 229
            },
            "start": 213,
            "end": 230
          }
        ],
        "start": 190,
        "end": 232
      },
      "expression": false,
      "start": 103,
      "end": 232
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 245
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "greeting",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 256,
              "end": 262
            },
            "start": 254,
            "end": 262
          },
          "start": 246,
          "end": 262
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 265
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 268,
            "end": 270
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 264,
          "end": 270
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 276,
              "end": 282
            },
            "start": 274,
            "end": 282
          },
          "start": 272,
          "end": 282
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParams",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 297
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 299,
                "end": 305
              },
              "start": 299,
              "end": 307
            },
            "start": 297,
            "end": 307
          },
          "value": null,
          "start": 284,
          "end": 307
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 315,
            "end": 322
          }
        ],
        "start": 309,
        "end": 324
      },
      "expression": false,
      "start": 233,
      "end": 324
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 324
}
```
