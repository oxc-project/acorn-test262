__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 31,
                "end": 36
              },
              "start": 24,
              "end": 37
            }
          ],
          "start": 22,
          "end": 39
        },
        "expression": false,
        "start": 7,
        "end": 39
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 39
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 40
}
```
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
        "name": "getPath",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 24
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
          "start": 28,
          "end": 34
        },
        "start": 26,
        "end": 34
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Zero",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 52
          },
          "start": 43,
          "end": 52
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "\"./0\"",
        "start": 58,
        "end": 63
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 36,
      "end": 64
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./0",
          "raw": "\"./0\"",
          "start": 72,
          "end": 77
        },
        "options": null,
        "phase": null,
        "start": 65,
        "end": 78
      },
      "directive": null,
      "start": 65,
      "end": 79
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 103
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Zero",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 111,
                          "end": 115
                        },
                        "typeArguments": null,
                        "start": 104,
                        "end": 115
                      }
                    ],
                    "start": 103,
                    "end": 116
                  },
                  "start": 96,
                  "end": 116
                },
                "start": 94,
                "end": 116
              },
              "start": 92,
              "end": 116
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getPath",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 133
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 126,
                "end": 135
              },
              "options": null,
              "phase": null,
              "start": 119,
              "end": 136
            },
            "definite": false,
            "start": 92,
            "end": 136
          }
        ],
        "declare": false,
        "start": 88,
        "end": 137
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 81,
      "end": 137
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 160
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Zero",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 168,
                          "end": 172
                        },
                        "typeArguments": null,
                        "start": 161,
                        "end": 172
                      }
                    ],
                    "start": 160,
                    "end": 173
                  },
                  "start": 153,
                  "end": 173
                },
                "start": 151,
                "end": 173
              },
              "start": 149,
              "end": 173
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "./0",
                "raw": "\"./0\"",
                "start": 183,
                "end": 188
              },
              "options": null,
              "phase": null,
              "start": 176,
              "end": 189
            },
            "definite": false,
            "start": 149,
            "end": 189
          }
        ],
        "declare": false,
        "start": 145,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 138,
      "end": 190
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 213
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 214,
                        "end": 217
                      }
                    ],
                    "start": 213,
                    "end": 218
                  },
                  "start": 206,
                  "end": 218
                },
                "start": 204,
                "end": 218
              },
              "start": 202,
              "end": 218
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "./0",
                "raw": "\"./0\"",
                "start": 228,
                "end": 233
              },
              "options": null,
              "phase": null,
              "start": 221,
              "end": 234
            },
            "definite": false,
            "start": 202,
            "end": 234
          }
        ],
        "declare": false,
        "start": 198,
        "end": 235
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 191,
      "end": 235
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 235
}
```
