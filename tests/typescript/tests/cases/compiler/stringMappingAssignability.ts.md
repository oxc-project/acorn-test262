__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Uppercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9,
                  "end": 18
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 19,
                      "end": 25
                    }
                  ],
                  "start": 18,
                  "end": 26
                },
                "start": 9,
                "end": 26
              },
              "start": 7,
              "end": 26
            },
            "start": 6,
            "end": 26
          },
          "init": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 29,
            "end": 31
          },
          "definite": false,
          "start": 6,
          "end": 31
        }
      ],
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Uppercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 51
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 52,
                      "end": 58
                    }
                  ],
                  "start": 51,
                  "end": 59
                },
                "start": 42,
                "end": 59
              },
              "start": 40,
              "end": 59
            },
            "start": 39,
            "end": 59
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 67
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 69,
                  "end": 74
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 64,
                "end": 74
              }
            ],
            "start": 62,
            "end": 76
          },
          "definite": false,
          "start": 39,
          "end": 76
        }
      ],
      "declare": false,
      "start": 33,
      "end": 77
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
