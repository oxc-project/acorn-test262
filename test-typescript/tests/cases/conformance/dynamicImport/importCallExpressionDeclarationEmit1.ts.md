__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 380,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 40,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 29,
        "decorators": [],
        "name": "getSpecifier",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 39,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 33,
          "end": 39
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 72,
            "decorators": [],
            "name": "whatToLoad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 72,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 65,
                "end": 72
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 105,
            "decorators": [],
            "name": "directory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 99,
                "end": 105
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
      "type": "VariableDeclaration",
      "start": 107,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 139,
            "decorators": [],
            "name": "moduleFile",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 139,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
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
      "type": "ExpressionStatement",
      "start": 142,
      "end": 165,
      "expression": {
        "type": "ImportExpression",
        "start": 142,
        "end": 164,
        "options": null,
        "source": {
          "type": "CallExpression",
          "start": 149,
          "end": 163,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 149,
            "end": 161,
            "decorators": [],
            "name": "getSpecifier",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 213,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 173,
            "decorators": [],
            "name": "p0",
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 176,
            "end": 213,
            "options": null,
            "source": {
              "type": "TemplateLiteral",
              "start": 183,
              "end": 212,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 186,
                  "end": 195,
                  "decorators": [],
                  "name": "directory",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 200,
                  "end": 210,
                  "decorators": [],
                  "name": "moduleFile",
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 183,
                  "end": 186,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 195,
                  "end": 200,
                  "tail": false,
                  "value": {
                    "cooked": "\\",
                    "raw": "\\\\"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 210,
                  "end": 212,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 246,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 221,
            "decorators": [],
            "name": "p1",
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 224,
            "end": 246,
            "options": null,
            "source": {
              "type": "CallExpression",
              "start": 231,
              "end": 245,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 231,
                "end": 243,
                "decorators": [],
                "name": "getSpecifier",
                "optional": false
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 248,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 309,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 256,
            "decorators": [],
            "name": "p2",
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 259,
            "end": 309,
            "options": null,
            "source": {
              "type": "ConditionalExpression",
              "start": 266,
              "end": 308,
              "alternate": {
                "type": "Literal",
                "start": 296,
                "end": 308,
                "raw": "\"defaulPath\"",
                "value": "defaulPath"
              },
              "consequent": {
                "type": "CallExpression",
                "start": 279,
                "end": 293,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 291,
                  "decorators": [],
                  "name": "getSpecifier",
                  "optional": false
                },
                "optional": false
              },
              "test": {
                "type": "Identifier",
                "start": 266,
                "end": 276,
                "decorators": [],
                "name": "whatToLoad",
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
      "type": "FunctionDeclaration",
      "start": 311,
      "end": 380,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 352,
        "end": 380,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 358,
            "end": 378,
            "argument": {
              "type": "ImportExpression",
              "start": 365,
              "end": 377,
              "options": null,
              "source": {
                "type": "Identifier",
                "start": 372,
                "end": 376,
                "decorators": [],
                "name": "path",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 337,
        "decorators": [],
        "name": "returnDynamicLoad",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 338,
          "end": 350,
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 342,
            "end": 350,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 344,
              "end": 350
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
