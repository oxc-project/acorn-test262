__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 181,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 27,
      "body": {
        "type": "TSEnumBody",
        "start": 15,
        "end": 27,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 17,
            "end": 20,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 25,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "Two",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "TokenType",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "EmptyStatement",
      "start": 27,
      "end": 28
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 38,
            "decorators": [],
            "name": "list",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 41,
            "end": 43,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 96,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 96,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 82,
            "end": 94,
            "argument": {
              "type": "Literal",
              "start": 89,
              "end": 93,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 66,
        "decorators": [],
        "name": "returnType",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 68,
        "end": 79,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 70,
          "end": 79,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 70,
            "end": 79,
            "decorators": [],
            "name": "TokenType",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 179,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 113,
        "end": 179,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 119,
            "end": 140,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 123,
                "end": 139,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 127,
                  "end": 139,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 137,
                    "decorators": [],
                    "name": "returnType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 146,
            "end": 177,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 150,
                "end": 176,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 162,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 162,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 153,
                      "end": 162,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 162,
                        "decorators": [],
                        "name": "TokenType",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 165,
                  "end": 176,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 169,
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 170,
                    "end": 175,
                    "raw": "'one'",
                    "value": "one"
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
