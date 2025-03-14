genericCallWithConstraintsTypeArgumentInference2.ts
```json
{
  "type": "Program",
  "start": 81,
  "end": 318,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 81,
      "end": 147,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 147,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 122,
            "end": 131,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 126,
                "end": 130,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 130,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 127,
                    "end": 130,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 129,
                      "end": 130,
                      "typeName": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 130,
                        "decorators": [],
                        "name": "U",
                        "optional": false
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
            "type": "ReturnStatement",
            "start": 136,
            "end": 145,
            "argument": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "u",
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
        "start": 90,
        "end": 93,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 110,
          "end": 114,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 114,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 113,
              "end": 114,
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 93,
        "end": 109,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 94,
            "end": 95,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 97,
            "end": 108,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 108,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 163,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 157,
            "end": 163,
            "arguments": [
              {
                "type": "Literal",
                "start": 161,
                "end": 162,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 189,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 177,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 180,
            "end": 189,
            "arguments": [
              {
                "type": "Literal",
                "start": 184,
                "end": 188,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 180,
              "end": 183,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 203,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 206,
            "end": 223,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 210,
                "end": 222,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 220,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 206,
              "end": 209,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 258,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 237,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 240,
            "end": 258,
            "arguments": [
              {
                "type": "Literal",
                "start": 256,
                "end": 257,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 240,
              "end": 243,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 243,
              "end": 255,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 244,
                  "end": 248,
                  "typeName": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 248,
                    "decorators": [],
                    "name": "Date",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 250,
                  "end": 254,
                  "typeName": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 254,
                    "decorators": [],
                    "name": "Date",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 269,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 273,
          "end": 305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 275,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 278,
            "end": 305,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 294,
                "end": 304,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 302,
                  "decorators": [],
                  "name": "Date",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 278,
              "end": 281,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 281,
              "end": 293,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 282,
                  "end": 286,
                  "typeName": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 286,
                    "decorators": [],
                    "name": "Date",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 288,
                  "end": 292,
                  "typeName": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 292,
                    "decorators": [],
                    "name": "Date",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
