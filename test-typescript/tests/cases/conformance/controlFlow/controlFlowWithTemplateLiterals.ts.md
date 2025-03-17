__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 179,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 40,
            "decorators": [],
            "name": "envVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 40,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 22,
                "end": 40,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 31,
                    "end": 40
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 42,
      "end": 95,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 74,
        "end": 95,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 78,
            "end": 93,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 78,
              "end": 93,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 91,
                  "end": 92,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 78,
                "end": 90,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 84,
                  "decorators": [],
                  "name": "envVar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 90,
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 46,
        "end": 72,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 46,
          "end": 59,
          "argument": {
            "type": "Identifier",
            "start": 53,
            "end": 59,
            "decorators": [],
            "name": "envVar",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "TemplateLiteral",
          "start": 64,
          "end": 72,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 64,
              "end": 72,
              "tail": true,
              "value": {
                "cooked": "string",
                "raw": "string"
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 135,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 135,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 116,
                "end": 135,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 116,
                    "end": 130,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 117,
                        "end": 129,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 121,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 121,
                          "end": 129,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 123,
                            "end": 129
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 133,
                    "end": 135,
                    "members": []
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 136,
      "end": 178,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 155,
        "end": 178,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 159,
            "end": 176,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 159,
              "end": 176,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 174,
                  "end": 175,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 159,
                "end": 173,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 159,
                  "end": 167,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 162,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 167,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 173,
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 140,
        "end": 153,
        "operator": "in",
        "left": {
          "type": "TemplateLiteral",
          "start": 140,
          "end": 146,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 140,
              "end": 146,
              "tail": true,
              "value": {
                "cooked": "test",
                "raw": "test"
              }
            }
          ]
        },
        "right": {
          "type": "Identifier",
          "start": 150,
          "end": 153,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
