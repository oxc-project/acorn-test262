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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 29,
        "name": "getSpecifier",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 72,
            "name": "whatToLoad",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 72,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 65,
                "end": 72
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 105,
            "name": "directory",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 99,
                "end": 105
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 139,
            "name": "moduleFile",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 139,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 165,
      "expression": {
        "type": "ImportExpression",
        "start": 142,
        "end": 164,
        "source": {
          "type": "CallExpression",
          "start": 149,
          "end": 163,
          "callee": {
            "type": "Identifier",
            "start": 149,
            "end": 161,
            "name": "getSpecifier",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "options": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 173,
            "name": "p0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 176,
            "end": 213,
            "source": {
              "type": "TemplateLiteral",
              "start": 183,
              "end": 212,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 186,
                  "end": 195,
                  "name": "directory",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 200,
                  "end": 210,
                  "name": "moduleFile",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 183,
                  "end": 186,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 195,
                  "end": 200,
                  "value": {
                    "cooked": "\\",
                    "raw": "\\\\"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 210,
                  "end": 212,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 221,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 224,
            "end": 246,
            "source": {
              "type": "CallExpression",
              "start": 231,
              "end": 245,
              "callee": {
                "type": "Identifier",
                "start": 231,
                "end": 243,
                "name": "getSpecifier",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 256,
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 259,
            "end": 309,
            "source": {
              "type": "ConditionalExpression",
              "start": 266,
              "end": 308,
              "test": {
                "type": "Identifier",
                "start": 266,
                "end": 276,
                "name": "whatToLoad",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "consequent": {
                "type": "CallExpression",
                "start": 279,
                "end": 293,
                "callee": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 291,
                  "name": "getSpecifier",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "alternate": {
                "type": "Literal",
                "start": 296,
                "end": 308,
                "value": "defaulPath",
                "raw": "\"defaulPath\""
              }
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 311,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 337,
        "name": "returnDynamicLoad",
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
          "start": 338,
          "end": 350,
          "name": "path",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 342,
            "end": 350,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 344,
              "end": 350
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "source": {
                "type": "Identifier",
                "start": 372,
                "end": 376,
                "name": "path",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "options": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
