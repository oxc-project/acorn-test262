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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 39,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
  "end": 236,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "name": "getPath",
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
        "start": 26,
        "end": 34,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 28,
          "end": 34
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 36,
      "end": 64,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 43,
          "end": 52,
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 52,
            "name": "Zero",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 58,
        "end": 63,
        "value": "./0",
        "raw": "\"./0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 79,
      "expression": {
        "type": "ImportExpression",
        "start": 65,
        "end": 78,
        "source": {
          "type": "Literal",
          "start": 72,
          "end": 77,
          "value": "./0",
          "raw": "\"./0\""
        },
        "options": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 81,
      "end": 137,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 88,
        "end": 137,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 92,
            "end": 136,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 116,
              "name": "p0",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 94,
                "end": 116,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 96,
                  "end": 116,
                  "typeName": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 103,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "Zero",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ImportExpression",
              "start": 119,
              "end": 136,
              "source": {
                "type": "CallExpression",
                "start": 126,
                "end": 135,
                "callee": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 133,
                  "name": "getPath",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 138,
      "end": 190,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 145,
        "end": 190,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 149,
            "end": 189,
            "id": {
              "type": "Identifier",
              "start": 149,
              "end": 173,
              "name": "p1",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 151,
                "end": 173,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 153,
                  "end": 173,
                  "typeName": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 160,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "Zero",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ImportExpression",
              "start": 176,
              "end": 189,
              "source": {
                "type": "Literal",
                "start": 183,
                "end": 188,
                "value": "./0",
                "raw": "\"./0\""
              },
              "options": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 191,
      "end": 235,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 198,
        "end": 235,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 202,
            "end": 234,
            "id": {
              "type": "Identifier",
              "start": 202,
              "end": 218,
              "name": "p2",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 204,
                "end": 218,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 206,
                  "end": 218,
                  "typeName": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 213,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ImportExpression",
              "start": 221,
              "end": 234,
              "source": {
                "type": "Literal",
                "start": 228,
                "end": 233,
                "value": "./0",
                "raw": "\"./0\""
              },
              "options": null
            },
            "definite": false
          }
        ],
        "kind": "var",
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
