__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 40,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 42,
      "end": 95,
      "test": {
        "type": "BinaryExpression",
        "start": 46,
        "end": 72,
        "left": {
          "type": "UnaryExpression",
          "start": 46,
          "end": 59,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 53,
            "end": 59,
            "decorators": [],
            "name": "envVar",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "===",
        "right": {
          "type": "TemplateLiteral",
          "start": 64,
          "end": 72,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 64,
              "end": 72,
              "value": {
                "raw": "string",
                "cooked": "string"
              },
              "tail": true
            }
          ],
          "expressions": []
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 74,
        "end": 95,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 78,
            "end": 93,
            "expression": {
              "type": "CallExpression",
              "start": 78,
              "end": 93,
              "callee": {
                "type": "MemberExpression",
                "start": 78,
                "end": 90,
                "object": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 84,
                  "decorators": [],
                  "name": "envVar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 90,
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 91,
                  "end": 92,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 135,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 135,
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 121,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 121,
                          "end": 129,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 123,
                            "end": 129
                          }
                        },
                        "accessibility": null,
                        "static": false
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 136,
      "end": 178,
      "test": {
        "type": "BinaryExpression",
        "start": 140,
        "end": 153,
        "left": {
          "type": "TemplateLiteral",
          "start": 140,
          "end": 146,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 140,
              "end": 146,
              "value": {
                "raw": "test",
                "cooked": "test"
              },
              "tail": true
            }
          ],
          "expressions": []
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "start": 150,
          "end": 153,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 155,
        "end": 178,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 159,
            "end": 176,
            "expression": {
              "type": "CallExpression",
              "start": 159,
              "end": 176,
              "callee": {
                "type": "MemberExpression",
                "start": 159,
                "end": 173,
                "object": {
                  "type": "MemberExpression",
                  "start": 159,
                  "end": 167,
                  "object": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 162,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 167,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 173,
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 174,
                  "end": 175,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
