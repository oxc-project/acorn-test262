genericFunctions0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 37,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 37,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 26,
            "end": 35,
            "argument": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "x",
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
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 18,
          "end": 22,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 22,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 21,
              "end": 22,
              "typeName": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "start": 39,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 61,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 47,
            "end": 61,
            "arguments": [
              {
                "type": "Literal",
                "start": 59,
                "end": 60,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 50,
              "end": 58,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 51,
                  "end": 57
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
