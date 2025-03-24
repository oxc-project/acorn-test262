__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 331,
  "body": [
    {
      "type": "ForStatement",
      "start": 29,
      "end": 73,
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 73,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 51,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 43,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 42,
              "end": 43,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 45,
            "end": 51,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 49,
              "end": 51,
              "raw": "10",
              "value": 10
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 53,
        "end": 58,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 53,
          "end": 54,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 57,
          "end": 58,
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "update": {
        "type": "SequenceExpression",
        "start": 60,
        "end": 68,
        "expressions": [
          {
            "type": "UpdateExpression",
            "start": 60,
            "end": 63,
            "argument": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": false
          },
          {
            "type": "UpdateExpression",
            "start": 65,
            "end": 68,
            "argument": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "--",
            "prefix": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 125,
      "end": 180,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 160,
        "end": 180,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 166,
            "end": 178,
            "argument": {
              "type": "SequenceExpression",
              "start": 173,
              "end": 177,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 173,
                  "end": 174,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 137,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 138,
          "end": 147,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 139,
            "end": 147,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 141,
              "end": 147
            }
          }
        },
        {
          "type": "Identifier",
          "start": 149,
          "end": 158,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 158,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 152,
              "end": 158
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 199,
            "decorators": [],
            "name": "resultIsString",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 202,
            "end": 215,
            "arguments": [
              {
                "type": "Literal",
                "start": 206,
                "end": 207,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 209,
                "end": 214,
                "raw": "\"123\"",
                "value": "123"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 202,
              "end": 205,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 235,
      "end": 331,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 259,
        "end": 331,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 265,
            "end": 275,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 269,
                "end": 274,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 274,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 270,
                    "end": 274,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 272,
                      "end": 274,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 272,
                        "end": 274,
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 280,
            "end": 290,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 284,
                "end": 289,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 289,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 285,
                    "end": 289,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 287,
                      "end": 289,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 287,
                        "end": 289,
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 295,
            "end": 300,
            "directive": null,
            "expression": {
              "type": "SequenceExpression",
              "start": 295,
              "end": 299,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 295,
                  "end": 296,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 298,
                  "end": 299,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 305,
            "end": 329,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 309,
                "end": 328,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 319,
                  "decorators": [],
                  "name": "resultIsT1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "SequenceExpression",
                  "start": 323,
                  "end": 327,
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 323,
                      "end": 324,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 248,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 248,
        "end": 256,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 249,
            "end": 251,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 249,
              "end": 251,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 253,
            "end": 255,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 253,
              "end": 255,
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
