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
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 68
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 70
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 69,
            "end": 70
          }
        ],
        "start": 68,
        "end": 71
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 78
              },
              "typeArguments": null,
              "start": 77,
              "end": 78
            },
            "start": 75,
            "end": 78
          },
          "start": 72,
          "end": 78
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "typeArguments": null,
          "start": 81,
          "end": 82
        },
        "start": 79,
        "end": 82
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 99
            },
            "start": 89,
            "end": 100
          }
        ],
        "start": 83,
        "end": 102
      },
      "expression": false,
      "start": 57,
      "end": 102
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 111
          },
          "init": {
            "type": "Literal",
            "value": "1",
            "raw": "'1'",
            "start": 114,
            "end": 117
          },
          "definite": false,
          "start": 110,
          "end": 117
        }
      ],
      "declare": false,
      "start": 104,
      "end": 118
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 126
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": " 2",
              "raw": "' 2'",
              "start": 133,
              "end": 137
            },
            "start": 129,
            "end": 137
          },
          "definite": false,
          "start": 125,
          "end": 137
        }
      ],
      "declare": false,
      "start": 119,
      "end": 138
    },
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
            "start": 145,
            "end": 146
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 149,
                "end": 152
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " 3",
                  "cooked": " 3"
                },
                "tail": true,
                "start": 153,
                "end": 157
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
              }
            ],
            "start": 149,
            "end": 157
          },
          "definite": false,
          "start": 145,
          "end": 157
        }
      ],
      "declare": false,
      "start": 139,
      "end": 158
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 166
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 169,
                  "end": 172
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " 3",
                    "cooked": " 3"
                  },
                  "tail": true,
                  "start": 173,
                  "end": 177
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 173
                }
              ],
              "start": 169,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 186
              },
              "typeArguments": null,
              "start": 181,
              "end": 186
            },
            "start": 169,
            "end": 186
          },
          "definite": false,
          "start": 165,
          "end": 186
        }
      ],
      "declare": false,
      "start": 159,
      "end": 187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 191
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 192,
                "end": 195
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " 3",
                  "cooked": " 3"
                },
                "tail": true,
                "start": 196,
                "end": 200
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 196
              }
            ],
            "start": 192,
            "end": 200
          }
        ],
        "optional": false,
        "start": 189,
        "end": 201
      },
      "directive": null,
      "start": 189,
      "end": 202
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 202
}
```
