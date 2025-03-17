__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 26,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9,
                "end": 26,
                "typeName": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 18,
                  "name": "Uppercase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 29,
            "end": 31,
            "value": 42,
            "raw": "42"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 59,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 42,
                "end": 59,
                "typeName": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 51,
                  "name": "Uppercase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 67,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 69,
                  "end": 74,
                  "value": "bar",
                  "raw": "\"bar\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
