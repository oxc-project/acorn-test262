stringMappingAssignability.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9,
                "end": 26,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 18,
                  "end": 26,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 19,
                      "end": 25
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 18,
                  "decorators": [],
                  "name": "Uppercase",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 29,
            "end": 31,
            "raw": "42",
            "value": 42
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 59,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 42,
                "end": 59,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 51,
                  "end": 59,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 52,
                      "end": 58
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 51,
                  "decorators": [],
                  "name": "Uppercase",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 62,
            "end": 76,
            "properties": [
              {
                "type": "Property",
                "start": 64,
                "end": 74,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 67,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 69,
                  "end": 74,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
