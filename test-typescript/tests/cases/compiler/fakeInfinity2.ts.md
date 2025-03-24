__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 50,
        "body": {
          "type": "TSEnumBody",
          "start": 16,
          "end": 50,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 22,
              "end": 31,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 26,
                "end": 31,
                "raw": "1e999",
                "value": 1e+400
              }
            },
            {
              "type": "TSEnumMember",
              "start": 37,
              "end": 47,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "UnaryExpression",
                "start": 41,
                "end": 47,
                "argument": {
                  "type": "Literal",
                  "start": 42,
                  "end": 47,
                  "raw": "1e999",
                  "value": 1e+400
                },
                "operator": "-",
                "prefix": true
              }
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 52,
      "end": 169,
      "body": {
        "type": "TSModuleBlock",
        "start": 64,
        "end": 169,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 70,
            "end": 85,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 79,
              "end": 84,
              "literal": {
                "type": "Literal",
                "start": 79,
                "end": 84,
                "raw": "1e999",
                "value": 1e+400
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 90,
            "end": 105,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 99,
              "end": 104,
              "literal": {
                "type": "Literal",
                "start": 99,
                "end": 104,
                "raw": "2e999",
                "value": 1e+400
              }
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 111,
            "end": 167,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 118,
              "end": 167,
              "async": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 159,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 130,
                "end": 133,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 132,
                  "end": 133,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 171,
      "end": 194,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 178,
        "end": 194,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 184,
            "end": 193,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 188,
              "end": 193,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 188,
                "end": 191,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 189,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 191,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
