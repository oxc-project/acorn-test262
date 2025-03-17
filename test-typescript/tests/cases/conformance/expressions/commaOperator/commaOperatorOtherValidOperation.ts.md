__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 332,
  "body": [
    {
      "type": "ForStatement",
      "start": 29,
      "end": 73,
      "init": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 51,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 42,
              "end": 43,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 45,
            "end": 51,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "name": "j",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 49,
              "end": 51,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 53,
        "end": 58,
        "left": {
          "type": "Identifier",
          "start": 53,
          "end": 54,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "start": 57,
          "end": 58,
          "name": "j",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "UpdateExpression",
            "start": 65,
            "end": 68,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "name": "j",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 73,
        "body": []
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 125,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 137,
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
          "start": 138,
          "end": 147,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 139,
            "end": 147,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 141,
              "end": 147
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 149,
          "end": 158,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 158,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 152,
              "end": 158
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 199,
            "name": "resultIsString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 202,
            "end": 215,
            "callee": {
              "type": "Identifier",
              "start": 202,
              "end": 205,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 206,
                "end": 207,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 209,
                "end": 214,
                "value": "123",
                "raw": "\"123\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 235,
      "end": 331,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 248,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 274,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 270,
                    "end": 274,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 272,
                      "end": 274,
                      "typeName": {
                        "type": "Identifier",
                        "start": 272,
                        "end": 274,
                        "name": "T1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 289,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 285,
                    "end": 289,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 287,
                      "end": 289,
                      "typeName": {
                        "type": "Identifier",
                        "start": 287,
                        "end": 289,
                        "name": "T2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 295,
            "end": 300,
            "expression": {
              "type": "SequenceExpression",
              "start": 295,
              "end": 299,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 295,
                  "end": 296,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 298,
                  "end": 299,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 319,
                  "name": "resultIsT1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 248,
        "end": 256,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 249,
            "end": 251,
            "name": {
              "type": "Identifier",
              "start": 249,
              "end": 251,
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 253,
            "end": 255,
            "name": {
              "type": "Identifier",
              "start": 253,
              "end": 255,
              "name": "T2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
