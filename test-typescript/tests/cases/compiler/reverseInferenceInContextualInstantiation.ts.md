__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "compare",
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
          "start": 20,
          "end": 24,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 24,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 23,
              "end": 24,
              "typeName": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 26,
          "end": 30,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 30,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 30,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "T",
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
        "start": 40,
        "end": 53,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 42,
            "end": 51,
            "argument": {
              "type": "Literal",
              "start": 49,
              "end": 50,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 39,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 33,
          "end": 39
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 69,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 69,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 61,
                "end": 69,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 61,
                  "end": 67
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 87,
      "expression": {
        "type": "CallExpression",
        "start": 71,
        "end": 86,
        "callee": {
          "type": "MemberExpression",
          "start": 71,
          "end": 77,
          "object": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 73,
            "end": 77,
            "name": "sort",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 78,
            "end": 85,
            "name": "compare",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
