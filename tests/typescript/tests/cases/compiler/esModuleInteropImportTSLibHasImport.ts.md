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
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 38,
                  "end": 55,
                  "id": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 55,
                    "decorators": [],
                    "name": "__exportStar",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 50,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 52,
                        "end": 55
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 57,
            "end": 91,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 64,
              "end": 91,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 70,
                  "end": 90,
                  "id": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 90,
                    "decorators": [],
                    "name": "__importDefault",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 85,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 87,
                        "end": 90
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 92,
            "end": 123,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 99,
              "end": 123,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 105,
                  "end": 122,
                  "id": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 122,
                    "decorators": [],
                    "name": "__importStar",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 117,
                      "end": 122,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 119,
                        "end": 122
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 40,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 21,
              "decorators": [],
              "name": "username",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 24,
              "end": 40,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "start": 30,
                "end": 40,
                "value": "username",
                "raw": "'username'"
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "decorators": [],
            "name": "sayHello",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 17,
            "end": 60,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 18,
                "end": 31,
                "decorators": [],
                "name": "name",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "UnaryExpression",
              "start": 36,
              "end": 60,
              "operator": "void",
              "argument": {
                "type": "TemplateLiteral",
                "start": 42,
                "end": 59,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 42,
                    "end": 52,
                    "value": {
                      "raw": "Hello, ",
                      "cooked": "Hello, "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 56,
                    "end": 59,
                    "value": {
                      "raw": "!",
                      "cooked": "!"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 52,
                    "end": 56,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
              },
              "prefix": true
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "sayHello",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "sayHello",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "username",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 49,
            "decorators": [],
            "name": "username",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "sayHello",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 78,
            "end": 88,
            "callee": {
              "type": "Identifier",
              "start": 78,
              "end": 86,
              "decorators": [],
              "name": "username",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
