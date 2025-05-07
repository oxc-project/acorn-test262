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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 31,
            "end": 68,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 38,
              "end": 68,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 50,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 60,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 54,
                      "end": 60
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 61,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 63,
                  "end": 67
                }
              },
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "raw": "\"foo*baz\"",
        "value": "foo*baz",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 99,
      "end": 157,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 124,
        "end": 157,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 130,
            "end": 155,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 137,
              "end": 155,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 143,
                  "end": 154,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 154,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 146,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 148,
                        "end": 154
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 114,
        "end": 123,
        "raw": "\"foo*baz\"",
        "value": "foo*baz",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 182,
      "end": 239,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 205,
        "end": 239,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 211,
            "end": 237,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 218,
              "end": 237,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 224,
                  "end": 236,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 236,
                    "decorators": [],
                    "name": "foos",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 228,
                      "end": 236,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 230,
                        "end": 236
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 197,
        "end": 204,
        "raw": "\"foos*\"",
        "value": "foos*",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 241,
      "end": 311,
      "kind": "module",
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 286,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 278,
                    "end": 286,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 280,
                      "end": 286
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 292,
            "end": 309,
            "declaration": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "exportKind": "value"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 256,
        "end": 264,
        "raw": "\"*!text\"",
        "value": "*!text",
        "regex": null,
        "bigint": null
      }
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
  "end": 215,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 42,
      "end": 77,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 65,
        "end": 76,
        "raw": "\"foobarbaz\"",
        "value": "foobarbaz",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 50,
          "end": 53,
          "imported": {
            "type": "Identifier",
            "start": 50,
            "end": 53,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 50,
            "end": 53,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 55,
          "end": 58,
          "imported": {
            "type": "Identifier",
            "start": 55,
            "end": 58,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 55,
            "end": 58,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 87,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 86,
        "arguments": [
          {
            "type": "Identifier",
            "start": 82,
            "end": 85,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 81,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 89,
      "end": 119,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 108,
        "end": 118,
        "raw": "\"foosball\"",
        "value": "foosball",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 97,
          "end": 101,
          "imported": {
            "type": "Identifier",
            "start": 97,
            "end": 101,
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 97,
            "end": 101,
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 130,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 129,
        "arguments": [
          {
            "type": "Identifier",
            "start": 124,
            "end": 128,
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 123,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 165,
      "end": 200,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 186,
        "end": 199,
        "raw": "\"./file!text\"",
        "value": "./file!text",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 172,
          "end": 180,
          "local": {
            "type": "Identifier",
            "start": 172,
            "end": 180,
            "decorators": [],
            "name": "fileText",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 215,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 214,
        "arguments": [
          {
            "type": "Identifier",
            "start": 205,
            "end": 213,
            "decorators": [],
            "name": "fileText",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 201,
          "end": 204,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
