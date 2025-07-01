__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foo*baz",
        "raw": "\"foo*baz\"",
        "start": 15,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 50
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 54,
                      "end": 60
                    },
                    "start": 52,
                    "end": 60
                  },
                  "start": 51,
                  "end": 60
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 63,
                  "end": 67
                },
                "start": 61,
                "end": 67
              },
              "body": null,
              "expression": false,
              "start": 38,
              "end": 68
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 31,
            "end": 68
          }
        ],
        "start": 25,
        "end": 70
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 70
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foo*baz",
        "raw": "\"foo*baz\"",
        "start": 114,
        "end": 123
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
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 148,
                        "end": 154
                      },
                      "start": 146,
                      "end": 154
                    },
                    "start": 143,
                    "end": 154
                  },
                  "init": null,
                  "definite": false,
                  "start": 143,
                  "end": 154
                }
              ],
              "declare": false,
              "start": 137,
              "end": 155
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 130,
            "end": 155
          }
        ],
        "start": 124,
        "end": 157
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 99,
      "end": 157
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foos*",
        "raw": "\"foos*\"",
        "start": 197,
        "end": 204
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
                    "name": "foos",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 230,
                        "end": 236
                      },
                      "start": 228,
                      "end": 236
                    },
                    "start": 224,
                    "end": 236
                  },
                  "init": null,
                  "definite": false,
                  "start": 224,
                  "end": 236
                }
              ],
              "declare": false,
              "start": 218,
              "end": 237
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 211,
            "end": 237
          }
        ],
        "start": 205,
        "end": 239
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 182,
      "end": 239
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "*!text",
        "raw": "\"*!text\"",
        "start": 256,
        "end": 264
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 280,
                      "end": 286
                    },
                    "start": 278,
                    "end": 286
                  },
                  "start": 277,
                  "end": 286
                },
                "init": null,
                "definite": false,
                "start": 277,
                "end": 286
              }
            ],
            "declare": false,
            "start": 271,
            "end": 287
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            },
            "exportKind": "value",
            "start": 292,
            "end": 309
          }
        ],
        "start": 265,
        "end": 311
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 241,
      "end": 311
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 312
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 53
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 53
          },
          "importKind": "value",
          "start": 50,
          "end": 53
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 58
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 58
          },
          "importKind": "value",
          "start": 55,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foobarbaz",
        "raw": "\"foobarbaz\"",
        "start": 65,
        "end": 76
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 42,
      "end": 77
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 81
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 85
          }
        ],
        "optional": false,
        "start": 78,
        "end": 86
      },
      "directive": null,
      "start": 78,
      "end": 87
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 101
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 101
          },
          "importKind": "value",
          "start": 97,
          "end": 101
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foosball",
        "raw": "\"foosball\"",
        "start": 108,
        "end": 118
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 89,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 123
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 128
          }
        ],
        "optional": false,
        "start": 120,
        "end": 129
      },
      "directive": null,
      "start": 120,
      "end": 130
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fileText",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 180
          },
          "start": 172,
          "end": 180
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file!text",
        "raw": "\"./file!text\"",
        "start": 186,
        "end": 199
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 165,
      "end": 200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 204
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fileText",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 213
          }
        ],
        "optional": false,
        "start": 201,
        "end": 214
      },
      "directive": null,
      "start": 201,
      "end": 215
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 42,
  "end": 215
}
```
