__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 243,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 34,
      "body": {
        "type": "TSEnumBody",
        "start": 12,
        "end": 34,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 18,
            "end": 21,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 32,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "Green",
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
        "end": 11,
        "decorators": [],
        "name": "Colors",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 44,
            "end": 54,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 44,
              "end": 50,
              "decorators": [],
              "name": "Colors",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 51,
              "end": 54,
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 98,
            "end": 105,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 100,
              "end": 105,
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 128,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 127,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 116,
          "end": 125,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 118,
            "end": 125,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 157,
      "end": 243,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 195,
        "end": 243,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 201,
            "end": 209,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 201,
              "end": 208,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 203,
                "end": 208,
                "decorators": [],
                "name": "Green",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 223,
            "end": 235,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 223,
              "end": 234,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 223,
                "end": 232,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 232,
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
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
        "start": 166,
        "end": 170,
        "decorators": [],
        "name": "fill",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 189,
          "end": 193,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 190,
            "end": 193,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 192,
              "end": 193,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 192,
                "end": 193,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 170,
        "end": 188,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 171,
            "end": 187,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 181,
              "end": 187,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 181,
                "end": 187,
                "decorators": [],
                "name": "Colors",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
