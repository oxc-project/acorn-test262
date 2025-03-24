__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 125,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "tslib",
        "raw": "\"tslib\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 125,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 56,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 32,
              "end": 56,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 38,
                  "end": 55,
                  "id": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 55,
                    "name": "__exportStar",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 50,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 52,
                        "end": 55
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
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 57,
            "end": 91,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 64,
              "end": 91,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 70,
                  "end": 90,
                  "id": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 90,
                    "name": "__importDefault",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 85,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 87,
                        "end": 90
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
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 92,
            "end": 123,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 99,
              "end": 123,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 105,
                  "end": 122,
                  "id": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 122,
                    "name": "__importStar",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 117,
                      "end": 122,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 119,
                        "end": 122
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
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 41,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 40,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 21,
              "name": "username",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 24,
              "end": 40,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Literal",
                "start": 30,
                "end": 40,
                "value": "username",
                "raw": "'username'"
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 27,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 26,
        "value": "./username",
        "raw": "'./username'"
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "name": "sayHello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 17,
            "end": 60,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 18,
                "end": 31,
                "name": "name",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "body": {
              "type": "UnaryExpression",
              "start": 36,
              "end": 60,
              "operator": "void",
              "prefix": true,
              "argument": {
                "type": "TemplateLiteral",
                "start": 42,
                "end": 59,
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 52,
                    "end": 56,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 42,
                    "end": 52,
                    "value": {
                      "cooked": "Hello, ",
                      "raw": "Hello, "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 56,
                    "end": 59,
                    "value": {
                      "cooked": "!",
                      "raw": "!"
                    },
                    "tail": true
                  }
                ]
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 63,
      "end": 87,
      "declaration": {
        "type": "Identifier",
        "start": 78,
        "end": 86,
        "name": "sayHello",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 15,
            "name": "sayHello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 30,
        "value": "./hello",
        "raw": "\"./hello\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 67,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 41,
          "end": 49,
          "imported": {
            "type": "Identifier",
            "start": 41,
            "end": 49,
            "name": "username",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 49,
            "name": "username",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 57,
        "end": 66,
        "value": "./utils",
        "raw": "'./utils'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 69,
      "end": 90,
      "expression": {
        "type": "CallExpression",
        "start": 69,
        "end": 89,
        "callee": {
          "type": "Identifier",
          "start": 69,
          "end": 77,
          "name": "sayHello",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 78,
            "end": 88,
            "callee": {
              "type": "Identifier",
              "start": 78,
              "end": 86,
              "name": "username",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
