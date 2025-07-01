__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "tslib",
        "raw": "\"tslib\"",
        "start": 15,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__exportStar",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 52,
                        "end": 55
                      },
                      "start": 50,
                      "end": 55
                    },
                    "start": 38,
                    "end": 55
                  },
                  "init": null,
                  "definite": false,
                  "start": 38,
                  "end": 55
                }
              ],
              "declare": false,
              "start": 32,
              "end": 56
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 25,
            "end": 56
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__importDefault",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 87,
                        "end": 90
                      },
                      "start": 85,
                      "end": 90
                    },
                    "start": 70,
                    "end": 90
                  },
                  "init": null,
                  "definite": false,
                  "start": 70,
                  "end": 90
                }
              ],
              "declare": false,
              "start": 64,
              "end": 91
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 57,
            "end": 91
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__importStar",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 119,
                        "end": 122
                      },
                      "start": 117,
                      "end": 122
                    },
                    "start": 105,
                    "end": 122
                  },
                  "init": null,
                  "definite": false,
                  "start": 105,
                  "end": 122
                }
              ],
              "declare": false,
              "start": 99,
              "end": 123
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 92,
            "end": 123
          }
        ],
        "start": 23,
        "end": 125
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 125
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 125
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "username",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 21
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "username",
                "raw": "'username'",
                "start": 30,
                "end": 40
              },
              "id": null,
              "generator": false,
              "start": 24,
              "end": 40
            },
            "definite": false,
            "start": 13,
            "end": 40
          }
        ],
        "declare": false,
        "start": 7,
        "end": 41
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./username",
        "raw": "'./username'",
        "start": 14,
        "end": 26
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
}
```
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
            "name": "sayHello",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  },
                  "start": 23,
                  "end": 31
                },
                "start": 18,
                "end": 31
              }
            ],
            "returnType": null,
            "body": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "Hello, ",
                      "cooked": "Hello, "
                    },
                    "tail": false,
                    "start": 42,
                    "end": 52
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "!",
                      "cooked": "!"
                    },
                    "tail": true,
                    "start": 56,
                    "end": 59
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 56
                  }
                ],
                "start": 42,
                "end": 59
              },
              "prefix": true,
              "start": 36,
              "end": 60
            },
            "id": null,
            "generator": false,
            "start": 17,
            "end": 60
          },
          "definite": false,
          "start": 6,
          "end": 60
        }
      ],
      "declare": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "sayHello",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 86
      },
      "exportKind": "value",
      "start": 63,
      "end": 87
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 87
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "sayHello",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 15
          },
          "start": 7,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./hello",
        "raw": "\"./hello\"",
        "start": 21,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "username",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 49
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "username",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 49
          },
          "importKind": "value",
          "start": 41,
          "end": 49
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./utils",
        "raw": "'./utils'",
        "start": 57,
        "end": 66
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 32,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "sayHello",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 77
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "username",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 86
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 78,
            "end": 88
          }
        ],
        "optional": false,
        "start": 69,
        "end": 89
      },
      "directive": null,
      "start": 69,
      "end": 90
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
