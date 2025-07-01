__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TokenType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 20
            },
            "initializer": null,
            "computed": false,
            "start": 17,
            "end": 20
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Two",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 25
            },
            "initializer": null,
            "computed": false,
            "start": 22,
            "end": 25
          }
        ],
        "start": 15,
        "end": 27
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "EmptyStatement",
      "start": 27,
      "end": 28
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "list",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 38
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 41,
            "end": 43
          },
          "definite": false,
          "start": 34,
          "end": 43
        }
      ],
      "declare": false,
      "start": 30,
      "end": 44
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnType",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 66
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
            "name": "TokenType",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 79
          },
          "typeArguments": null,
          "start": 70,
          "end": 79
        },
        "start": 68,
        "end": 79
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 89,
              "end": 93
            },
            "start": 82,
            "end": 94
          }
        ],
        "start": 80,
        "end": 96
      },
      "expression": false,
      "start": 47,
      "end": 96
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 110
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 124
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "returnType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 137
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 127,
                  "end": 139
                },
                "definite": false,
                "start": 123,
                "end": 139
              }
            ],
            "declare": false,
            "start": 119,
            "end": 140
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TokenType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 153,
                        "end": 162
                      },
                      "typeArguments": null,
                      "start": 153,
                      "end": 162
                    },
                    "start": 151,
                    "end": 162
                  },
                  "start": 150,
                  "end": 162
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 169
                  },
                  "property": {
                    "type": "Literal",
                    "value": "one",
                    "raw": "'one'",
                    "start": 170,
                    "end": 175
                  },
                  "optional": false,
                  "computed": true,
                  "start": 165,
                  "end": 176
                },
                "definite": false,
                "start": 150,
                "end": 176
              }
            ],
            "declare": false,
            "start": 146,
            "end": 177
          }
        ],
        "start": 113,
        "end": 179
      },
      "expression": false,
      "start": 98,
      "end": 179
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 180
}
```
