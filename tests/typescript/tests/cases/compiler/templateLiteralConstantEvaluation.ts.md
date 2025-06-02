__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 202,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 68,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 68,
        "end": 71,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 69,
            "end": 70,
            "name": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
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
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 72,
          "end": 78,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 78,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 77,
              "end": 78,
              "typeName": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 79,
        "end": 82,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 81,
          "end": 82,
          "typeName": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 102,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 89,
            "end": 100,
            "argument": {
              "type": "Identifier",
              "start": 96,
              "end": 99,
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 118,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 114,
            "end": 117,
            "value": "1",
            "raw": "'1'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 138,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 129,
            "end": 137,
            "left": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 133,
              "end": 137,
              "value": " 2",
              "raw": "' 2'"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 158,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 149,
            "end": 157,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 149,
                "end": 152,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 153,
                "end": 157,
                "value": {
                  "raw": " 3",
                  "cooked": " 3"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 187,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 186,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 169,
            "end": 186,
            "expression": {
              "type": "TemplateLiteral",
              "start": 169,
              "end": 177,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 169,
                  "end": 172,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 173,
                  "end": 177,
                  "value": {
                    "raw": " 3",
                    "cooked": " 3"
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 181,
              "end": 186,
              "typeName": {
                "type": "Identifier",
                "start": 181,
                "end": 186,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 202,
      "expression": {
        "type": "CallExpression",
        "start": 189,
        "end": 201,
        "callee": {
          "type": "Identifier",
          "start": 189,
          "end": 191,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 192,
            "end": 200,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 192,
                "end": 195,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 196,
                "end": 200,
                "value": {
                  "raw": " 3",
                  "cooked": " 3"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ]
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
