__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 39,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 39,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 24,
              "end": 37,
              "argument": {
                "type": "Literal",
                "start": 31,
                "end": 36,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 235,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 35,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "getPath",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 26,
        "end": 34,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 28,
          "end": 34
        }
      },
      "typeParameters": null
    },
    {
      "type": "ImportDeclaration",
      "start": 36,
      "end": 64,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 58,
        "end": 63,
        "raw": "\"./0\"",
        "value": "./0"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 43,
          "end": 52,
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 52,
            "decorators": [],
            "name": "Zero",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "ImportExpression",
        "start": 65,
        "end": 78,
        "options": null,
        "source": {
          "type": "Literal",
          "start": 72,
          "end": 77,
          "raw": "\"./0\"",
          "value": "./0"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 81,
      "end": 137,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 88,
        "end": 137,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 92,
            "end": 136,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 116,
              "decorators": [],
              "name": "p0",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 94,
                "end": 116,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 96,
                  "end": 116,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 103,
                    "end": 116,
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "start": 104,
                        "end": 115,
                        "exprName": {
                          "type": "Identifier",
                          "start": 111,
                          "end": 115,
                          "decorators": [],
                          "name": "Zero",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 103,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "ImportExpression",
              "start": 119,
              "end": 136,
              "options": null,
              "source": {
                "type": "CallExpression",
                "start": 126,
                "end": 135,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 133,
                  "decorators": [],
                  "name": "getPath",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 138,
      "end": 190,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 145,
        "end": 190,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 149,
            "end": 189,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 149,
              "end": 173,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 151,
                "end": 173,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 153,
                  "end": 173,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 160,
                    "end": 173,
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "start": 161,
                        "end": 172,
                        "exprName": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 172,
                          "decorators": [],
                          "name": "Zero",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 160,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "ImportExpression",
              "start": 176,
              "end": 189,
              "options": null,
              "source": {
                "type": "Literal",
                "start": 183,
                "end": 188,
                "raw": "\"./0\"",
                "value": "./0"
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 191,
      "end": 235,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 198,
        "end": 235,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 202,
            "end": 234,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 202,
              "end": 218,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 204,
                "end": 218,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 206,
                  "end": 218,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 213,
                    "end": 218,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 214,
                        "end": 217
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 213,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "ImportExpression",
              "start": 221,
              "end": 234,
              "options": null,
              "source": {
                "type": "Literal",
                "start": 228,
                "end": 233,
                "raw": "\"./0\"",
                "value": "./0"
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
