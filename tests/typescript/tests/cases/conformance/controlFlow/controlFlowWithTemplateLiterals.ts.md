__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "envVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 22,
                "end": 40
              },
              "start": 20,
              "end": 40
            },
            "start": 14,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 40
        }
      ],
      "declare": true,
      "start": 0,
      "end": 41
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "envVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 59
          },
          "prefix": true,
          "start": 46,
          "end": 59
        },
        "operator": "===",
        "right": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "string",
                "cooked": "string"
              },
              "tail": true,
              "start": 64,
              "end": 72
            }
          ],
          "expressions": [],
          "start": 64,
          "end": 72
        },
        "start": 46,
        "end": 72
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "envVar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 84
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 90
                },
                "optional": false,
                "computed": false,
                "start": 78,
                "end": 90
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 91,
                  "end": 92
                }
              ],
              "optional": false,
              "start": 78,
              "end": 93
            },
            "directive": null,
            "start": 78,
            "end": 93
          }
        ],
        "start": 74,
        "end": 95
      },
      "alternate": null,
      "start": 42,
      "end": 95
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 117,
                          "end": 121
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 123,
                            "end": 129
                          },
                          "start": 121,
                          "end": 129
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 117,
                        "end": 129
                      }
                    ],
                    "start": 116,
                    "end": 130
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 133,
                    "end": 135
                  }
                ],
                "start": 116,
                "end": 135
              },
              "start": 114,
              "end": 135
            },
            "start": 111,
            "end": 135
          },
          "init": null,
          "definite": false,
          "start": 111,
          "end": 135
        }
      ],
      "declare": true,
      "start": 97,
      "end": 135
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "test",
                "cooked": "test"
              },
              "tail": true,
              "start": 140,
              "end": 146
            }
          ],
          "expressions": [],
          "start": 140,
          "end": 146
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 153
        },
        "start": 140,
        "end": 153
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 162
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 167
                  },
                  "optional": false,
                  "computed": false,
                  "start": 159,
                  "end": 167
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 173
                },
                "optional": false,
                "computed": false,
                "start": 159,
                "end": 173
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 174,
                  "end": 175
                }
              ],
              "optional": false,
              "start": 159,
              "end": 176
            },
            "directive": null,
            "start": 159,
            "end": 176
          }
        ],
        "start": 155,
        "end": 178
      },
      "alternate": null,
      "start": 136,
      "end": 178
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 178
}
```
