__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 277,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
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
      "type": "VariableDeclaration",
      "start": 15,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
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
      "type": "VariableDeclaration",
      "start": 30,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 40,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 40,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
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
      "type": "ClassDeclaration",
      "start": 42,
      "end": 277,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 277,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 64,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 59,
              "end": 64,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 64,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 78,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 78,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 78,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 103,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "start": 91,
              "end": 96,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 103,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 103,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 121,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "start": 109,
              "end": 114,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 121,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 121,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 136,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "UnaryExpression",
              "start": 127,
              "end": 129,
              "argument": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "prefix": true
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 130,
              "end": 136,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 133,
                "end": 136,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 141,
            "end": 158,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 149,
              "end": 151,
              "raw": "\"\"",
              "value": ""
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 152,
              "end": 158,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 155,
                "end": 158,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 172,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 164,
              "end": 165,
              "raw": "0",
              "value": 0
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 172,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 169,
                "end": 172,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 177,
            "end": 186,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 180,
              "end": 186,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 186,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 191,
            "end": 215,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "TSTypeAssertion",
              "start": 199,
              "end": 208,
              "expression": {
                "type": "Literal",
                "start": 204,
                "end": 208,
                "raw": "true",
                "value": true
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 200,
                "end": 203
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 209,
              "end": 215,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 212,
                "end": 215,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 220,
            "end": 239,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "TemplateLiteral",
              "start": 221,
              "end": 232,
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 221,
                  "end": 232,
                  "tail": true,
                  "value": {
                    "cooked": "hello bye",
                    "raw": "hello bye"
                  }
                }
              ]
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 233,
              "end": 239,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 236,
                "end": 239,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 275,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "TemplateLiteral",
              "start": 252,
              "end": 268,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 252,
                  "end": 261,
                  "tail": false,
                  "value": {
                    "cooked": "hello ",
                    "raw": "hello "
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 262,
                  "end": 268,
                  "tail": true,
                  "value": {
                    "cooked": " bye",
                    "raw": " bye"
                  }
                }
              ]
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 269,
              "end": 275,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 272,
                "end": 275,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
