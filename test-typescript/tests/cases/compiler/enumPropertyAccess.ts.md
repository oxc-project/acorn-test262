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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "name": "Colors",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 18,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 21,
            "name": "Red",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 27,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 32,
            "name": "Green",
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
        "start": 12,
        "end": 34,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 18,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "name": "Red",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 32,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "name": "Green",
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
      "type": "VariableDeclaration",
      "start": 36,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 44,
            "end": 54,
            "object": {
              "type": "Identifier",
              "start": 44,
              "end": 50,
              "name": "Colors",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 51,
              "end": 54,
              "name": "Red",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 98,
            "end": 105,
            "object": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 100,
              "end": 105,
              "name": "Green",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 128,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 127,
        "callee": {
          "type": "MemberExpression",
          "start": 116,
          "end": 125,
          "object": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 118,
            "end": 125,
            "name": "toFixed",
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
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 157,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 170,
        "name": "fill",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 189,
          "end": 193,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 190,
            "end": 193,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 192,
              "end": 193,
              "typeName": {
                "type": "Identifier",
                "start": 192,
                "end": 193,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 195,
        "end": 243,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 201,
            "end": 209,
            "expression": {
              "type": "MemberExpression",
              "start": 201,
              "end": 208,
              "object": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 203,
                "end": 208,
                "name": "Green",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 223,
            "end": 235,
            "expression": {
              "type": "CallExpression",
              "start": 223,
              "end": 234,
              "callee": {
                "type": "MemberExpression",
                "start": 223,
                "end": 232,
                "object": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 232,
                  "name": "toFixed",
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
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 170,
        "end": 188,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 171,
            "end": 187,
            "name": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 181,
              "end": 187,
              "typeName": {
                "type": "Identifier",
                "start": 181,
                "end": 187,
                "name": "Colors",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
