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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "greetings",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 17,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 33,
        "name": "greet",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 34,
          "end": 50,
          "name": "greeting",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 50,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 44,
              "end": 50
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 102,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 66,
            "end": 78,
            "expression": {
              "type": "UpdateExpression",
              "start": 66,
              "end": 77,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 66,
                "end": 75,
                "name": "greetings",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 83,
            "end": 100,
            "argument": {
              "type": "Identifier",
              "start": 90,
              "end": 99,
              "name": "greetings",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 51,
        "end": 59,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 53,
          "end": 59
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 118,
        "name": "greet2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 119,
          "end": 135,
          "name": "greeting",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 127,
            "end": 135,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 129,
              "end": 135
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 137,
          "end": 143,
          "left": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 141,
            "end": 143,
            "value": 10,
            "raw": "10"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 145,
          "end": 155,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 147,
            "end": 155,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 149,
              "end": 155
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "RestElement",
          "start": 157,
          "end": 180,
          "argument": {
            "type": "Identifier",
            "start": 160,
            "end": 170,
            "name": "restParams",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "body": {
        "type": "BlockStatement",
        "start": 190,
        "end": 232,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 196,
            "end": 208,
            "expression": {
              "type": "UpdateExpression",
              "start": 196,
              "end": 207,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 196,
                "end": 205,
                "name": "greetings",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 213,
            "end": 230,
            "argument": {
              "type": "Identifier",
              "start": 220,
              "end": 229,
              "name": "greetings",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 181,
        "end": 189,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 183,
          "end": 189
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 233,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 245,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 246,
          "end": 262,
          "name": "greeting",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 254,
            "end": 262,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 256,
              "end": 262
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 264,
          "end": 270,
          "left": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 268,
            "end": 270,
            "value": 10,
            "raw": "10"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 272,
          "end": 282,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 274,
            "end": 282,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 276,
              "end": 282
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "RestElement",
          "start": 284,
          "end": 307,
          "argument": {
            "type": "Identifier",
            "start": 287,
            "end": 297,
            "name": "restParams",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
