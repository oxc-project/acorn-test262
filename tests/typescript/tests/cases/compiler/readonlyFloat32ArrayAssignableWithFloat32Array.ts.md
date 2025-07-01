__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "update",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 27
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Float32Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 28,
                      "end": 40
                    },
                    "typeArguments": null,
                    "start": 28,
                    "end": 40
                  }
                ],
                "start": 27,
                "end": 41
              },
              "start": 19,
              "end": 41
            },
            "start": 17,
            "end": 41
          },
          "start": 16,
          "end": 41
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 56
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "copy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 63
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 65
                    }
                  ],
                  "optional": false,
                  "start": 59,
                  "end": 66
                },
                "definite": false,
                "start": 55,
                "end": 66
              }
            ],
            "declare": false,
            "start": 49,
            "end": 67
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 75
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 77
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 80
                }
              ],
              "optional": false,
              "start": 72,
              "end": 81
            },
            "directive": null,
            "start": 72,
            "end": 82
          }
        ],
        "start": 43,
        "end": 84
      },
      "expression": false,
      "start": 0,
      "end": 84
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "add",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 98
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Float32Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 114
              },
              "typeArguments": null,
              "start": 102,
              "end": 114
            },
            "start": 100,
            "end": 114
          },
          "start": 99,
          "end": 114
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Float32Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 131
              },
              "typeArguments": null,
              "start": 119,
              "end": 131
            },
            "start": 117,
            "end": 131
          },
          "start": 116,
          "end": 131
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Float32Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 148
                },
                "typeArguments": null,
                "start": 136,
                "end": 148
              },
              "start": 134,
              "end": 148
            },
            "start": 133,
            "end": 148
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 152
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 152
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 161
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 162,
                  "end": 163
                },
                "optional": false,
                "computed": true,
                "start": 160,
                "end": 164
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 168
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 169,
                    "end": 170
                  },
                  "optional": false,
                  "computed": true,
                  "start": 167,
                  "end": 171
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 175
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 176,
                    "end": 177
                  },
                  "optional": false,
                  "computed": true,
                  "start": 174,
                  "end": 178
                },
                "start": 167,
                "end": 178
              },
              "start": 160,
              "end": 178
            },
            "directive": null,
            "start": 160,
            "end": 179
          }
        ],
        "start": 154,
        "end": 181
      },
      "expression": false,
      "start": 86,
      "end": 181
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "copy",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 196
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Float32Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 212
              },
              "typeArguments": null,
              "start": 200,
              "end": 212
            },
            "start": 198,
            "end": 212
          },
          "start": 197,
          "end": 212
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Float32Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 243
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 245
                }
              ],
              "start": 227,
              "end": 246
            },
            "start": 220,
            "end": 247
          }
        ],
        "start": 214,
        "end": 249
      },
      "expression": false,
      "start": 183,
      "end": 249
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 249
}
```
