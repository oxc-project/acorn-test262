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
        "name": "Colors",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 21
            },
            "initializer": null,
            "computed": false,
            "start": 18,
            "end": 21
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 32
            },
            "initializer": null,
            "computed": false,
            "start": 27,
            "end": 32
          }
        ],
        "start": 12,
        "end": 34
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 34
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
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Colors",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 50
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 54
            },
            "optional": false,
            "computed": false,
            "start": 44,
            "end": 54
          },
          "definite": false,
          "start": 40,
          "end": 54
        }
      ],
      "declare": false,
      "start": 36,
      "end": 55
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 95
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 105
            },
            "optional": false,
            "computed": false,
            "start": 98,
            "end": 105
          },
          "definite": false,
          "start": 94,
          "end": 105
        }
      ],
      "declare": false,
      "start": 90,
      "end": 106
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 117
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 125
          },
          "optional": false,
          "computed": false,
          "start": 116,
          "end": 125
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 116,
        "end": 127
      },
      "directive": null,
      "start": 116,
      "end": 128
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fill",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 170
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 172
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Colors",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 187
              },
              "typeArguments": null,
              "start": 181,
              "end": 187
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 171,
            "end": 187
          }
        ],
        "start": 170,
        "end": 188
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 193
              },
              "typeArguments": null,
              "start": 192,
              "end": 193
            },
            "start": 190,
            "end": 193
          },
          "start": 189,
          "end": 193
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 202
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Green",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 208
              },
              "optional": false,
              "computed": false,
              "start": 201,
              "end": 208
            },
            "directive": null,
            "start": 201,
            "end": 209
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 224
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 232
                },
                "optional": false,
                "computed": false,
                "start": 223,
                "end": 232
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 223,
              "end": 234
            },
            "directive": null,
            "start": 223,
            "end": 235
          }
        ],
        "start": 195,
        "end": 243
      },
      "expression": false,
      "start": 157,
      "end": 243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 243
}
```
