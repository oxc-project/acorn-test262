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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 94,
      "async": true,
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 62,
        "decorators": [],
        "name": "returnStatement0",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 64,
        "end": 78,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 66,
          "end": 78,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 66,
            "end": 73,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 161,
      "async": true,
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
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 127,
        "decorators": [],
        "name": "returnStatement1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 129,
        "end": 143,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 131,
          "end": 143,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 131,
            "end": 138,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 163,
      "end": 234,
      "async": true,
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
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 194,
        "decorators": [],
        "name": "returnStatement2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 196,
        "end": 210,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 198,
          "end": 210,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 198,
            "end": 205,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 236,
      "end": 303,
      "async": true,
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 267,
        "decorators": [],
        "name": "returnStatement3",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 269,
        "end": 283,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 271,
          "end": 283,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 271,
            "end": 278,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 305,
      "end": 385,
      "async": true,
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
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 336,
        "decorators": [],
        "name": "returnStatement4",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 338,
        "end": 352,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 340,
          "end": 352,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 340,
            "end": 347,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 387,
      "end": 461,
      "async": true,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 418,
        "decorators": [],
        "name": "returnStatement5",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 420,
        "end": 434,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 422,
          "end": 434,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 422,
            "end": 429,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
