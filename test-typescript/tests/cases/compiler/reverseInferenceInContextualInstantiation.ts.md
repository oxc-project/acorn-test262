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
      "async": false,
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
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "compare",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 24,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 24,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 23,
              "end": 24,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 26,
          "end": 30,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 30,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 30,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 39,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 33,
          "end": 39
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 69,
            "decorators": [],
            "name": "x",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 87,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 71,
        "end": 86,
        "arguments": [
          {
            "type": "Identifier",
            "start": 78,
            "end": 85,
            "decorators": [],
            "name": "compare",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 71,
          "end": 77,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 73,
            "end": 77,
            "decorators": [],
            "name": "sort",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
