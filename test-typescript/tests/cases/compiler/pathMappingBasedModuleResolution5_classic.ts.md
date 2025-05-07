__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 259,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 31,
        "raw": "\"folder2/file1\"",
        "value": "folder2/file1",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 63,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 63,
        "raw": "\"folder3/file2\"",
        "value": "folder3/file2",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 40,
          "end": 41,
          "imported": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 64,
      "end": 98,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 98,
        "raw": "\"components/file3\"",
        "value": "components/file3",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 72,
          "end": 73,
          "imported": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 99,
      "end": 123,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 116,
        "end": 123,
        "raw": "\"file4\"",
        "value": "file4",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 107,
          "end": 109,
          "imported": {
            "type": "Identifier",
            "start": 107,
            "end": 109,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 107,
            "end": 109,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 125,
      "end": 160,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 145,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 146,
          "end": 152,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 147,
            "end": 152,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 149,
              "end": 152
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 153,
        "end": 159,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 155,
          "end": 159
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 185,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 162,
        "end": 184,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 166,
            "end": 183,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 166,
              "end": 181,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 168,
                "end": 181,
                "decorators": [],
                "name": "toExponential",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 162,
          "end": 165,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 186,
      "end": 209,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 186,
        "end": 208,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 190,
            "end": 207,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 190,
              "end": 205,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 192,
                "end": 205,
                "decorators": [],
                "name": "toExponential",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 186,
          "end": 189,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 233,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 232,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 214,
            "end": 231,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 214,
              "end": 229,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 214,
                "end": 215,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 216,
                "end": 229,
                "decorators": [],
                "name": "toExponential",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 210,
          "end": 213,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 234,
      "end": 258,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 234,
        "end": 257,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 238,
            "end": 256,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 238,
              "end": 254,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 238,
                "end": 240,
                "decorators": [],
                "name": "z1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 241,
                "end": 254,
                "decorators": [],
                "name": "toExponential",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 234,
          "end": 237,
          "decorators": [],
          "name": "use",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 18,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 13,
              "decorators": [],
              "name": "z1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 16,
              "end": 17,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
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
