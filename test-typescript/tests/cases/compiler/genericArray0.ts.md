genericArray0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 14,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 6,
                "end": 14,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 6,
                  "end": 12
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
      "type": "VariableDeclaration",
      "start": 18,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 74,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 74,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 55,
            "end": 72,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 59,
                "end": 71,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 66,
                  "decorators": [],
                  "name": "ys",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 63,
                      "end": 66,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 63,
                        "end": 64,
                        "typeName": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 64,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 69,
                  "end": 71,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "decorators": [],
        "name": "map",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 45,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
