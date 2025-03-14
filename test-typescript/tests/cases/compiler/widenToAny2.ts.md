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
      "async": false,
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
              "decorators": [],
              "name": "undefined",
              "optional": false
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
        "end": 13,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 67,
            "decorators": [],
            "name": "z3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 67,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 70,
            "end": 94,
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
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  {
                    "type": "Literal",
                    "start": 87,
                    "end": 92,
                    "raw": "\"def\"",
                    "value": "def"
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
