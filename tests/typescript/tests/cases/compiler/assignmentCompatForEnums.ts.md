__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 180,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "TokenType",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Two",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 43,
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
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "returnType",
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
            "decorators": [],
            "name": "TokenType",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 113,
        "end": 179,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 119,
            "end": 140,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 123,
                "end": 139,
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
                  "callee": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 137,
                    "decorators": [],
                    "name": "returnType",
                    "optional": false,
                    "typeAnnotation": null
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
          {
            "type": "VariableDeclaration",
            "start": 146,
            "end": 177,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 150,
                "end": 176,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 162,
                        "decorators": [],
                        "name": "TokenType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 165,
                  "end": 176,
                  "object": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 169,
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 170,
                    "end": 175,
                    "value": "one",
                    "raw": "'one'"
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
