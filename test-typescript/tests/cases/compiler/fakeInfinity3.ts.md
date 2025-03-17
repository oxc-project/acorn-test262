__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 228,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 50,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 31,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 26,
              "end": 31,
              "value": 1e+400,
              "raw": "1e999"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 37,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 41,
              "end": 47,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 42,
                "end": 47,
                "value": 1e+400,
                "raw": "1e999"
              }
            },
            "computed": false
          }
        ],
        "const": false,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 16,
          "end": 50,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 22,
              "end": 31,
              "id": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": {
                "type": "Literal",
                "start": 26,
                "end": 31,
                "value": 1e+400,
                "raw": "1e999"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 37,
              "end": 47,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": {
                "type": "UnaryExpression",
                "start": 41,
                "end": 47,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 42,
                  "end": 47,
                  "value": 1e+400,
                  "raw": "1e999"
                }
              },
              "computed": false
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 52,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 64,
        "end": 169,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 70,
            "end": 85,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 79,
              "end": 84,
              "literal": {
                "type": "Literal",
                "start": 79,
                "end": 84,
                "value": 1e+400,
                "raw": "1e999"
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 90,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 99,
              "end": 104,
              "literal": {
                "type": "Literal",
                "start": 99,
                "end": 104,
                "value": 1e+400,
                "raw": "2e999"
              }
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 111,
            "end": 167,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 118,
              "end": 167,
              "id": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "name": "f",
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
                "start": 134,
                "end": 167,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 144,
                    "end": 161,
                    "argument": {
                      "type": "NewExpression",
                      "start": 150,
                      "end": 161,
                      "callee": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 159,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 130,
                "end": 133,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 132,
                  "end": 133,
                  "typeName": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 171,
      "end": 194,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 178,
        "end": 194,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 184,
            "end": 193,
            "id": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 188,
              "end": 193,
              "callee": {
                "type": "MemberExpression",
                "start": 188,
                "end": 191,
                "object": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 189,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 191,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 196,
      "end": 227,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 203,
        "end": 227,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 209,
            "end": 226,
            "id": {
              "type": "Identifier",
              "start": 209,
              "end": 217,
              "name": "Infinity",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 220,
              "end": 226,
              "value": "oops",
              "raw": "\"oops\""
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
  "sourceType": "script",
  "hashbang": null
}
```
