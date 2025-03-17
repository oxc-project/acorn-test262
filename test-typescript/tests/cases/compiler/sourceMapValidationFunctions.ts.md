__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 324,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "greetings",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 17,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 102,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 102,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 66,
            "end": 78,
            "directive": null,
            "expression": {
              "type": "UpdateExpression",
              "start": 66,
              "end": 77,
              "argument": {
                "type": "Identifier",
                "start": 66,
                "end": 75,
                "decorators": [],
                "name": "greetings",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 83,
            "end": 100,
            "argument": {
              "type": "Identifier",
              "start": 90,
              "end": 99,
              "decorators": [],
              "name": "greetings",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 33,
        "decorators": [],
        "name": "greet",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 34,
          "end": 50,
          "decorators": [],
          "name": "greeting",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 50,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 44,
              "end": 50
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 51,
        "end": 59,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 53,
          "end": 59
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 232,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 190,
        "end": 232,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 196,
            "end": 208,
            "directive": null,
            "expression": {
              "type": "UpdateExpression",
              "start": 196,
              "end": 207,
              "argument": {
                "type": "Identifier",
                "start": 196,
                "end": 205,
                "decorators": [],
                "name": "greetings",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 213,
            "end": 230,
            "argument": {
              "type": "Identifier",
              "start": 220,
              "end": 229,
              "decorators": [],
              "name": "greetings",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 118,
        "decorators": [],
        "name": "greet2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 119,
          "end": 135,
          "decorators": [],
          "name": "greeting",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 127,
            "end": 135,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 129,
              "end": 135
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 137,
          "end": 143,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 141,
            "end": 143,
            "raw": "10",
            "value": 10
          },
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 145,
          "end": 155,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 147,
            "end": 155,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 149,
              "end": 155
            }
          }
        },
        {
          "type": "RestElement",
          "start": 157,
          "end": 180,
          "argument": {
            "type": "Identifier",
            "start": 160,
            "end": 170,
            "decorators": [],
            "name": "restParams",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 170,
            "end": 180,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 172,
              "end": 180,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 172,
                "end": 178
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 181,
        "end": 189,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 183,
          "end": 189
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 233,
      "end": 324,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 309,
        "end": 324,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 315,
            "end": 322,
            "argument": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 245,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 246,
          "end": 262,
          "decorators": [],
          "name": "greeting",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 254,
            "end": 262,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 256,
              "end": 262
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 264,
          "end": 270,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 268,
            "end": 270,
            "raw": "10",
            "value": 10
          },
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 272,
          "end": 282,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 274,
            "end": 282,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 276,
              "end": 282
            }
          }
        },
        {
          "type": "RestElement",
          "start": 284,
          "end": 307,
          "argument": {
            "type": "Identifier",
            "start": 287,
            "end": 297,
            "decorators": [],
            "name": "restParams",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 297,
            "end": 307,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 299,
              "end": 307,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 299,
                "end": 305
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
