__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 461,
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
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 62,
        "name": "returnStatement0",
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
        "start": 79,
        "end": 94,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 85,
            "end": 92,
            "argument": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 64,
        "end": 78,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 66,
          "end": 78,
          "typeName": {
            "type": "Identifier",
            "start": 66,
            "end": 73,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 73,
            "end": 78,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 74,
                "end": 77
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 127,
        "name": "returnStatement1",
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
        "start": 144,
        "end": 161,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 150,
            "end": 159,
            "argument": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "name": "x",
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
        "start": 129,
        "end": 143,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 131,
          "end": 143,
          "typeName": {
            "type": "Identifier",
            "start": 131,
            "end": 138,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 138,
            "end": 143,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 139,
                "end": 142
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 163,
      "end": 234,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 194,
        "name": "returnStatement2",
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
        "start": 211,
        "end": 234,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 217,
            "end": 232,
            "argument": {
              "type": "AwaitExpression",
              "start": 224,
              "end": 231,
              "argument": {
                "type": "Identifier",
                "start": 230,
                "end": 231,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 196,
        "end": 210,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 198,
          "end": 210,
          "typeName": {
            "type": "Identifier",
            "start": 198,
            "end": 205,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 205,
            "end": 210,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 206,
                "end": 209
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 236,
      "end": 303,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 267,
        "name": "returnStatement3",
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
        "start": 284,
        "end": 303,
        "body": [
          {
            "type": "BlockStatement",
            "start": 290,
            "end": 301,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 292,
                "end": 299,
                "argument": null
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 269,
        "end": 283,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 271,
          "end": 283,
          "typeName": {
            "type": "Identifier",
            "start": 271,
            "end": 278,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 278,
            "end": 283,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 279,
                "end": 282
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 305,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 336,
        "name": "returnStatement4",
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
        "start": 353,
        "end": 385,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 359,
            "end": 367,
            "expression": {
              "type": "AwaitExpression",
              "start": 359,
              "end": 366,
              "argument": {
                "type": "Identifier",
                "start": 365,
                "end": 366,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 372,
            "end": 383,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 374,
                "end": 381,
                "argument": null
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 338,
        "end": 352,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 340,
          "end": 352,
          "typeName": {
            "type": "Identifier",
            "start": 340,
            "end": 347,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 347,
            "end": 352,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 348,
                "end": 351
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 387,
      "end": 461,
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 418,
        "name": "returnStatement5",
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
        "start": 434,
        "end": 461,
        "body": [
          {
            "type": "BlockStatement",
            "start": 440,
            "end": 459,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 442,
                "end": 457,
                "argument": {
                  "type": "AwaitExpression",
                  "start": 449,
                  "end": 456,
                  "argument": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 456,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 420,
        "end": 434,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 422,
          "end": 434,
          "typeName": {
            "type": "Identifier",
            "start": 422,
            "end": 429,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 429,
            "end": 434,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 430,
                "end": 433
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
