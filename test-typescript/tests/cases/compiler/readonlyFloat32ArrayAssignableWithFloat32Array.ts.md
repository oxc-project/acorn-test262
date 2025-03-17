__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 249,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "update",
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
          "start": 16,
          "end": 41,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 41,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 19,
              "end": 41,
              "typeName": {
                "type": "Identifier",
                "start": 19,
                "end": 27,
                "name": "Readonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 27,
                "end": 41,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 28,
                    "end": 40,
                    "typeName": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 40,
                      "name": "Float32Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 84,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 49,
            "end": 67,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 55,
                "end": 66,
                "id": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 59,
                  "end": 66,
                  "callee": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 63,
                    "name": "copy",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 72,
            "end": 82,
            "expression": {
              "type": "CallExpression",
              "start": 72,
              "end": 81,
              "callee": {
                "type": "Identifier",
                "start": 72,
                "end": 75,
                "name": "add",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 98,
        "name": "add",
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
          "start": 99,
          "end": 114,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 114,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 102,
              "end": 114,
              "typeName": {
                "type": "Identifier",
                "start": 102,
                "end": 114,
                "name": "Float32Array",
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
        {
          "type": "Identifier",
          "start": 116,
          "end": 131,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 131,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 131,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 131,
                "name": "Float32Array",
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
        {
          "type": "AssignmentPattern",
          "start": 133,
          "end": 152,
          "left": {
            "type": "Identifier",
            "start": 133,
            "end": 148,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 148,
                  "name": "Float32Array",
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
          "right": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 154,
        "end": 181,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 160,
            "end": 179,
            "expression": {
              "type": "AssignmentExpression",
              "start": 160,
              "end": 178,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 160,
                "end": 164,
                "object": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 162,
                  "end": 163,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 167,
                "end": 178,
                "left": {
                  "type": "MemberExpression",
                  "start": 167,
                  "end": 171,
                  "object": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 168,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 169,
                    "end": 170,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": true,
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "start": 174,
                  "end": 178,
                  "object": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 176,
                    "end": 177,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": true,
                  "optional": false
                }
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 183,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 196,
        "name": "copy",
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
          "start": 197,
          "end": 212,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 212,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 200,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 200,
                "end": 212,
                "name": "Float32Array",
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
        "start": 214,
        "end": 249,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 220,
            "end": 247,
            "argument": {
              "type": "NewExpression",
              "start": 227,
              "end": 246,
              "callee": {
                "type": "Identifier",
                "start": 231,
                "end": 243,
                "name": "Float32Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 244,
                  "end": 245,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "typeArguments": null
            }
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
