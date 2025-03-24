__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 93,
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
          "start": 110,
          "end": 114,
          "name": "t",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 130,
                  "name": "u",
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
                        "name": "U",
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
            "type": "ReturnStatement",
            "start": 136,
            "end": 145,
            "argument": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 93,
        "end": 109,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 94,
            "end": 95,
            "name": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "T",
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
            "start": 97,
            "end": 108,
            "name": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 108,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 157,
            "end": 163,
            "callee": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 161,
                "end": 162,
                "value": 1,
                "raw": "1"
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
      "type": "VariableDeclaration",
      "start": 171,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 177,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 180,
            "end": 189,
            "callee": {
              "type": "Identifier",
              "start": 180,
              "end": 183,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 184,
                "end": 188,
                "value": null,
                "raw": "null"
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
      "type": "VariableDeclaration",
      "start": 197,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 203,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 206,
            "end": 223,
            "callee": {
              "type": "Identifier",
              "start": 206,
              "end": 209,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 210,
                "end": 222,
                "callee": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 220,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 231,
      "end": 259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 258,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 237,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 240,
            "end": 258,
            "callee": {
              "type": "Identifier",
              "start": 240,
              "end": 243,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 256,
                "end": 257,
                "value": 1,
                "raw": "1"
              }
            ],
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
                    "name": "Date",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 250,
                  "end": 254,
                  "typeName": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 254,
                    "name": "Date",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 275,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 278,
            "end": 305,
            "callee": {
              "type": "Identifier",
              "start": 278,
              "end": 281,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 294,
                "end": 304,
                "callee": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 302,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ],
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
                    "name": "Date",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 288,
                  "end": 292,
                  "typeName": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 292,
                    "name": "Date",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
