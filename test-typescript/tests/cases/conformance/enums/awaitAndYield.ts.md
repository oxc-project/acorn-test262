awaitAndYield.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 109,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 109,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 47,
            "end": 107,
            "body": {
              "type": "TSEnumBody",
              "start": 54,
              "end": 107,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 64,
                  "end": 77,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 67,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "initializer": {
                    "type": "AwaitExpression",
                    "start": 70,
                    "end": 77,
                    "argument": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSEnumMember",
                  "start": 87,
                  "end": 100,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 90,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
                  },
                  "initializer": {
                    "type": "YieldExpression",
                    "start": 93,
                    "end": 100,
                    "argument": {
                      "type": "Literal",
                      "start": 99,
                      "end": 100,
                      "raw": "1",
                      "value": 1
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "E",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 20,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 39,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 39,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 24,
              "end": 39,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 31,
                "end": 39,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 32,
                    "end": 38
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 31,
                "decorators": [],
                "name": "Promise",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
