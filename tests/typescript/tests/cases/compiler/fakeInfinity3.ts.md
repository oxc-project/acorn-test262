__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 15
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 23
              },
              "initializer": {
                "type": "Literal",
                "value": 1e+400,
                "raw": "1e999",
                "start": 26,
                "end": 31
              },
              "computed": false,
              "start": 22,
              "end": 31
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 38
              },
              "initializer": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1e+400,
                  "raw": "1e999",
                  "start": 42,
                  "end": 47
                },
                "prefix": true,
                "start": 41,
                "end": 47
              },
              "computed": false,
              "start": 37,
              "end": 47
            }
          ],
          "start": 16,
          "end": 50
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 50
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1e+400,
                "raw": "1e999",
                "start": 79,
                "end": 84
              },
              "start": 79,
              "end": 84
            },
            "declare": false,
            "start": 70,
            "end": 85
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 96
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1e+400,
                "raw": "2e999",
                "start": 99,
                "end": 104
              },
              "start": 99,
              "end": 104
            },
            "declare": false,
            "start": 90,
            "end": 105
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 133
                  },
                  "typeArguments": null,
                  "start": 132,
                  "end": 133
                },
                "start": 130,
                "end": 133
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 154,
                        "end": 159
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 150,
                      "end": 161
                    },
                    "start": 144,
                    "end": 161
                  }
                ],
                "start": 134,
                "end": 167
              },
              "expression": false,
              "start": 118,
              "end": 167
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 111,
            "end": 167
          }
        ],
        "start": 64,
        "end": 169
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 52,
      "end": 169
    },
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 185
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 189
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 191
                },
                "optional": false,
                "computed": false,
                "start": 188,
                "end": 191
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 188,
              "end": 193
            },
            "definite": false,
            "start": 184,
            "end": 193
          }
        ],
        "declare": false,
        "start": 178,
        "end": 194
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 171,
      "end": 194
    },
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
              "name": "Infinity",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 217
            },
            "init": {
              "type": "Literal",
              "value": "oops",
              "raw": "\"oops\"",
              "start": 220,
              "end": 226
            },
            "definite": false,
            "start": 209,
            "end": 226
          }
        ],
        "declare": false,
        "start": 203,
        "end": 227
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 196,
      "end": 227
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 227
}
```
