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
      "async": false,
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
        "start": 66,
        "end": 68,
        "decorators": [],
        "name": "fn",
        "optional": false
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
                "optional": false
              }
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
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 68,
        "end": 71,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 69,
            "end": 70,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 114,
            "end": 117,
            "raw": "'1'",
            "value": "1"
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 129,
            "end": 137,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 133,
              "end": 137,
              "raw": "' 2'",
              "value": " 2"
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "c",
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
                "decorators": [],
                "name": "b",
                "optional": false
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 149,
                "end": 152,
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 153,
                "end": 157,
                "tail": true,
                "value": {
                  "cooked": " 3",
                  "raw": " 3"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "d",
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
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 169,
                  "end": 172,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 173,
                  "end": 177,
                  "tail": true,
                  "value": {
                    "cooked": " 3",
                    "raw": " 3"
                  }
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
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 202,
      "expression": {
        "type": "CallExpression",
        "start": 189,
        "end": 201,
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
                "decorators": [],
                "name": "b",
                "optional": false
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 192,
                "end": 195,
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 196,
                "end": 200,
                "tail": true,
                "value": {
                  "cooked": " 3",
                  "raw": " 3"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 189,
          "end": 191,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
