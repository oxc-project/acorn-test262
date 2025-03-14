reachabilityChecks7.ts
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
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 84,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 114,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 94,
            "end": 114,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 111,
              "end": 114,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 191,
      "end": 234,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 226,
        "end": 234,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 208,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 210,
        "end": 225,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 212,
          "end": 225,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 212,
            "end": 219,
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
      "end": 282,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 257,
        "end": 282,
        "body": [
          {
            "type": "IfStatement",
            "start": 263,
            "end": 280,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 270,
              "end": 280,
              "argument": {
                "type": "Literal",
                "start": 277,
                "end": 279,
                "raw": "10",
                "value": 10
              }
            },
            "test": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
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
        "start": 251,
        "end": 253,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 254,
          "end": 255,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 284,
      "end": 329,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 321,
        "end": 329,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 301,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 303,
        "end": 320,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 305,
          "end": 320,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 305,
            "end": 312,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 331,
      "end": 360,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 357,
        "end": 360,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 348,
        "decorators": [],
        "name": "voidFunc",
        "optional": false
      },
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 362,
      "end": 422,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 389,
        "end": 422,
        "body": [
          {
            "type": "IfStatement",
            "start": 395,
            "end": 420,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 402,
              "end": 420,
              "argument": {
                "type": "CallExpression",
                "start": 409,
                "end": 419,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 417,
                  "decorators": [],
                  "name": "voidFunc",
                  "optional": false
                },
                "optional": false
              }
            },
            "test": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
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
        "start": 371,
        "end": 385,
        "decorators": [],
        "name": "calltoVoidFunc",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 386,
          "end": 387,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 424,
      "end": 462,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 444,
        "decorators": [],
        "name": "use",
        "optional": false
      },
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 463,
      "end": 494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 467,
          "end": 494,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 467,
            "end": 469,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 472,
            "end": 494,
            "async": false,
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
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 484,
                        "end": 490,
                        "raw": "\"Test\"",
                        "value": "Test"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 483,
                      "decorators": [],
                      "name": "use",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
