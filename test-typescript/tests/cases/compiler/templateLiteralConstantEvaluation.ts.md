__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 203,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 68,
        "name": "fn",
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
          "start": 72,
          "end": 78,
          "name": "arg",
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
              "name": "arg",
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
          }
        ]
      },
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 129,
            "end": 137,
            "left": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 149,
            "end": 157,
            "expressions": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 149,
                "end": 152,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 153,
                "end": 157,
                "value": {
                  "cooked": " 3",
                  "raw": " 3"
                },
                "tail": true
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 186,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 169,
            "end": 186,
            "expression": {
              "type": "TemplateLiteral",
              "start": 169,
              "end": 177,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 169,
                  "end": 172,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 173,
                  "end": 177,
                  "value": {
                    "cooked": " 3",
                    "raw": " 3"
                  },
                  "tail": true
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
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
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
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 192,
            "end": 200,
            "expressions": [
              {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 192,
                "end": 195,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 196,
                "end": 200,
                "value": {
                  "cooked": " 3",
                  "raw": " 3"
                },
                "tail": true
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
