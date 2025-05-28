__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 494,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "decorators": [],
        "name": "f1",
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
        "start": 77,
        "end": 84,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 114,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 94,
            "end": 114,
            "id": null,
            "generator": false,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 111,
              "end": 114,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 191,
      "end": 234,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 208,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 210,
        "end": 225,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 212,
          "end": 225,
          "typeName": {
            "type": "Identifier",
            "start": 212,
            "end": 219,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 219,
            "end": 225,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 220,
                "end": 224
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 226,
        "end": 234,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 236,
      "end": 282,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 253,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 254,
          "end": 255,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 257,
        "end": 282,
        "body": [
          {
            "type": "IfStatement",
            "start": 263,
            "end": 280,
            "test": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 270,
              "end": 280,
              "argument": {
                "type": "Literal",
                "start": 277,
                "end": 279,
                "value": 10,
                "raw": "10"
              }
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 284,
      "end": 329,
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 301,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 303,
        "end": 320,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 305,
          "end": 320,
          "typeName": {
            "type": "Identifier",
            "start": 305,
            "end": 312,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 312,
            "end": 320,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 313,
                "end": 319
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 321,
        "end": 329,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 331,
      "end": 360,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 348,
        "decorators": [],
        "name": "voidFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 350,
        "end": 356,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 352,
          "end": 356
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 357,
        "end": 360,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 362,
      "end": 422,
      "id": {
        "type": "Identifier",
        "start": 371,
        "end": 385,
        "decorators": [],
        "name": "calltoVoidFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 386,
          "end": 387,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 389,
        "end": 422,
        "body": [
          {
            "type": "IfStatement",
            "start": 395,
            "end": 420,
            "test": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 402,
              "end": 420,
              "argument": {
                "type": "CallExpression",
                "start": 409,
                "end": 419,
                "callee": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 417,
                  "decorators": [],
                  "name": "voidFunc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 424,
      "end": 462,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 444,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 445,
          "end": 454,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 446,
            "end": 454,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 448,
              "end": 454
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 455,
        "end": 461,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 457,
          "end": 461
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 463,
      "end": 494,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 467,
          "end": 494,
          "id": {
            "type": "Identifier",
            "start": 467,
            "end": 469,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 472,
            "end": 494,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 478,
              "end": 494,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 480,
                  "end": 492,
                  "expression": {
                    "type": "CallExpression",
                    "start": 480,
                    "end": 491,
                    "callee": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 483,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 484,
                        "end": 490,
                        "value": "Test",
                        "raw": "\"Test\""
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
