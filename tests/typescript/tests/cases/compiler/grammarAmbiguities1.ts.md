__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 21,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 21,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 19,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 13,
              "end": 19,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 16,
                "end": 19,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 42,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 42,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 41,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 41,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 41,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 43,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "f",
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
          "start": 54,
          "end": 55,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 70,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 59,
            "end": 68,
            "argument": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 71,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 81,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 82,
            "end": 83,
            "name": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 88,
          "end": 89,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 107,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 93,
            "end": 105,
            "argument": {
              "type": "CallExpression",
              "start": 100,
              "end": 104,
              "callee": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 118,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 118,
        "callee": {
          "type": "Identifier",
          "start": 108,
          "end": 109,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 109,
          "end": 115,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 110,
              "end": 111,
              "typeName": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 113,
              "end": 114,
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 116,
            "end": 117,
            "value": 7,
            "raw": "7"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 134,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 133,
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 122,
            "end": 132,
            "callee": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 123,
              "end": 129,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 124,
                  "end": 125,
                  "typeName": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 127,
                  "end": 128,
                  "typeName": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 128,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 130,
                "end": 131,
                "value": 7,
                "raw": "7"
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 151,
      "expression": {
        "type": "CallExpression",
        "start": 135,
        "end": 150,
        "callee": {
          "type": "Identifier",
          "start": 135,
          "end": 136,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 137,
            "end": 142,
            "left": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 144,
            "end": 149,
            "left": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Literal",
              "start": 148,
              "end": 149,
              "value": 7,
              "raw": "7"
            }
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 171,
      "expression": {
        "type": "CallExpression",
        "start": 152,
        "end": 170,
        "callee": {
          "type": "Identifier",
          "start": 152,
          "end": 153,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 154,
            "end": 159,
            "left": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "BinaryExpression",
            "start": 161,
            "end": 169,
            "left": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "UnaryExpression",
              "start": 165,
              "end": 169,
              "operator": "+",
              "argument": {
                "type": "Literal",
                "start": 167,
                "end": 168,
                "value": 7,
                "raw": "7"
              },
              "prefix": true
            }
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
