__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 312,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 70,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "value": "foo*baz",
        "raw": "\"foo*baz\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 31,
            "end": 68,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 38,
              "end": 68,
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 50,
                "name": "foo",
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
                  "start": 51,
                  "end": 60,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 54,
                      "end": 60
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 61,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 63,
                  "end": 67
                }
              }
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 99,
      "end": 157,
      "id": {
        "type": "Literal",
        "start": 114,
        "end": 123,
        "value": "foo*baz",
        "raw": "\"foo*baz\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 124,
        "end": 157,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 130,
            "end": 155,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 137,
              "end": 155,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 143,
                  "end": 154,
                  "id": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 154,
                    "name": "baz",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 146,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 148,
                        "end": 154
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 182,
      "end": 239,
      "id": {
        "type": "Literal",
        "start": 197,
        "end": 204,
        "value": "foos*",
        "raw": "\"foos*\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 205,
        "end": 239,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 211,
            "end": 237,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 218,
              "end": 237,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 224,
                  "end": 236,
                  "id": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 236,
                    "name": "foos",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 228,
                      "end": 236,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 230,
                        "end": 236
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 241,
      "end": 311,
      "id": {
        "type": "Literal",
        "start": 256,
        "end": 264,
        "value": "*!text",
        "raw": "\"*!text\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 265,
        "end": 311,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 271,
            "end": 287,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 277,
                "end": 286,
                "id": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 286,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 278,
                    "end": 286,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 280,
                      "end": 286
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
          {
            "type": "ExportDefaultDeclaration",
            "start": 292,
            "end": 309,
            "declaration": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
  "start": 42,
  "end": 216,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 42,
      "end": 77,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 50,
          "end": 53,
          "imported": {
            "type": "Identifier",
            "start": 50,
            "end": 53,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 50,
            "end": 53,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 55,
          "end": 58,
          "imported": {
            "type": "Identifier",
            "start": 55,
            "end": 58,
            "name": "baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 55,
            "end": 58,
            "name": "baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 65,
        "end": 76,
        "value": "foobarbaz",
        "raw": "\"foobarbaz\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 87,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 86,
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 81,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 82,
            "end": 85,
            "name": "baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 89,
      "end": 119,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 97,
          "end": 101,
          "imported": {
            "type": "Identifier",
            "start": 97,
            "end": 101,
            "name": "foos",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 97,
            "end": 101,
            "name": "foos",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 108,
        "end": 118,
        "value": "foosball",
        "raw": "\"foosball\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 130,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 129,
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 123,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 124,
            "end": 128,
            "name": "foos",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 165,
      "end": 200,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 172,
          "end": 180,
          "local": {
            "type": "Identifier",
            "start": 172,
            "end": 180,
            "name": "fileText",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 186,
        "end": 199,
        "value": "./file!text",
        "raw": "\"./file!text\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 215,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 214,
        "callee": {
          "type": "Identifier",
          "start": 201,
          "end": 204,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 205,
            "end": 213,
            "name": "fileText",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
