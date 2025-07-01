__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getSpecifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 29
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 33,
          "end": 39
        },
        "start": 31,
        "end": 39
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "whatToLoad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 65,
                "end": 72
              },
              "start": 63,
              "end": 72
            },
            "start": 53,
            "end": 72
          },
          "init": null,
          "definite": false,
          "start": 53,
          "end": 72
        }
      ],
      "declare": true,
      "start": 41,
      "end": 73
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
            "name": "directory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 99,
                "end": 105
              },
              "start": 97,
              "end": 105
            },
            "start": 88,
            "end": 105
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 105
        }
      ],
      "declare": true,
      "start": 74,
      "end": 106
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
            "name": "moduleFile",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
              },
              "start": 131,
              "end": 139
            },
            "start": 121,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 121,
          "end": 139
        }
      ],
      "declare": true,
      "start": 107,
      "end": 140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getSpecifier",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 161
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 149,
          "end": 163
        },
        "options": null,
        "phase": null,
        "start": 142,
        "end": 164
      },
      "directive": null,
      "start": 142,
      "end": 165
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p0",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 173
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 183,
                  "end": 186
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "\\\\",
                    "cooked": "\\"
                  },
                  "tail": false,
                  "start": 195,
                  "end": 200
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 210,
                  "end": 212
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "directory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 195
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moduleFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 210
                }
              ],
              "start": 183,
              "end": 212
            },
            "options": null,
            "phase": null,
            "start": 176,
            "end": 213
          },
          "definite": false,
          "start": 171,
          "end": 213
        }
      ],
      "declare": false,
      "start": 167,
      "end": 214
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 221
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSpecifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 243
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 231,
              "end": 245
            },
            "options": null,
            "phase": null,
            "start": 224,
            "end": 246
          },
          "definite": false,
          "start": 219,
          "end": 246
        }
      ],
      "declare": false,
      "start": 215,
      "end": 247
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 256
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "whatToLoad",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 276
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getSpecifier",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 291
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 279,
                "end": 293
              },
              "alternate": {
                "type": "Literal",
                "value": "defaulPath",
                "raw": "\"defaulPath\"",
                "start": 296,
                "end": 308
              },
              "start": 266,
              "end": 308
            },
            "options": null,
            "phase": null,
            "start": 259,
            "end": 309
          },
          "definite": false,
          "start": 254,
          "end": 309
        }
      ],
      "declare": false,
      "start": 248,
      "end": 309
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnDynamicLoad",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 337
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 344,
              "end": 350
            },
            "start": 342,
            "end": 350
          },
          "start": 338,
          "end": 350
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ImportExpression",
              "source": {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 376
              },
              "options": null,
              "phase": null,
              "start": 365,
              "end": 377
            },
            "start": 358,
            "end": 378
          }
        ],
        "start": 352,
        "end": 380
      },
      "expression": false,
      "start": 311,
      "end": 380
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 380
}
```
