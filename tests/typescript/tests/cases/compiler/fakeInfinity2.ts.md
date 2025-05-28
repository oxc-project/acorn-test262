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
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 50,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "UnaryExpression",
                "start": 41,
                "end": 47,
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "start": 42,
                  "end": 47,
                  "value": 1e+400,
                  "raw": "1e999"
                },
                "prefix": true
              },
              "computed": false
            }
          ]
        },
        "const": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 52,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
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
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 184,
            "end": 193,
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
              "callee": {
                "type": "MemberExpression",
                "start": 188,
                "end": 191,
                "object": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 189,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 191,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
