__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 385,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 50,
            "decorators": [],
            "name": "asyncIterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 50,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 42,
                  "decorators": [],
                  "name": "AsyncIterable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 42,
                  "end": 50,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 93,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 92,
            "decorators": [],
            "name": "iterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 84,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 84,
                  "end": 92,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 85,
                      "end": 91
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 94,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 110,
        "decorators": [],
        "name": "f",
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
        "start": 113,
        "end": 385,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 119,
            "end": 133,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 123,
                "end": 132,
                "id": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 132,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 124,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 126,
                      "end": 132
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
            "start": 138,
            "end": 152,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 142,
                "end": 151,
                "id": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 151,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 143,
                    "end": 151,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 145,
                      "end": 151
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
            "type": "ForOfStatement",
            "start": 157,
            "end": 190,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 168,
              "end": 175,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 174,
                  "end": 175,
                  "id": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "decorators": [],
                    "name": "x",
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
              "start": 179,
              "end": 181,
              "properties": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 183,
              "end": 190,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 195,
            "end": 222,
            "await": true,
            "left": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ObjectExpression",
              "start": 211,
              "end": 213,
              "properties": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 215,
              "end": 222,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 227,
            "end": 265,
            "await": true,
            "left": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 243,
              "end": 256,
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 258,
              "end": 265,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 270,
            "end": 303,
            "await": true,
            "left": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 286,
              "end": 294,
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 296,
              "end": 303,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 308,
            "end": 346,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 313,
              "end": 320,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 319,
                  "end": 320,
                  "id": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 320,
                    "decorators": [],
                    "name": "x",
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
              "type": "Identifier",
              "start": 324,
              "end": 337,
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 339,
              "end": 346,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 351,
            "end": 383,
            "await": false,
            "left": {
              "type": "Identifier",
              "start": 356,
              "end": 357,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 361,
              "end": 374,
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 376,
              "end": 383,
              "body": []
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
