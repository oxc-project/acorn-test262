__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "foo3",
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
          "start": 17,
          "end": 23,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 23,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 20,
              "end": 23,
              "elementType": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 21,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 53,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 34,
            "end": 51,
            "argument": {
              "type": "Identifier",
              "start": 41,
              "end": 50,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
        "start": 24,
        "end": 27,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 26,
          "end": 27,
          "typeName": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 67,
            "name": "z3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 67,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 70,
            "end": 94,
            "callee": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 75,
                "end": 93,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 76,
                    "end": 85,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Literal",
                    "start": 87,
                    "end": 92,
                    "value": "def",
                    "raw": "\"def\""
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
