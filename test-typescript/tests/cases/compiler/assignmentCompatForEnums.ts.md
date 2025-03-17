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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "name": "TokenType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 17,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 20,
            "name": "One",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 22,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 25,
            "name": "Two",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 15,
        "end": 27,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 17,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "name": "One",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 25,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "name": "Two",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 38,
            "name": "list",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 41,
            "end": 43,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 66,
        "name": "returnType",
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 68,
        "end": 79,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 70,
          "end": 79,
          "typeName": {
            "type": "Identifier",
            "start": 70,
            "end": 79,
            "name": "TokenType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "name": "foo",
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
                "id": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 127,
                  "end": 139,
                  "callee": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 137,
                    "name": "returnType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 162,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 162,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 153,
                      "end": 162,
                      "typeName": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 162,
                        "name": "TokenType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 165,
                  "end": 176,
                  "object": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 169,
                    "name": "list",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 170,
                    "end": 175,
                    "value": "one",
                    "raw": "'one'"
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
