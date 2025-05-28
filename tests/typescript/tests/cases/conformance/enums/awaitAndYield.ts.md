__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 20,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 31,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
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
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 109,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 47,
            "end": 107,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 54,
              "end": 107,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 64,
                  "end": 77,
                  "id": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 67,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
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
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 87,
                  "end": 100,
                  "id": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 90,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": {
                    "type": "YieldExpression",
                    "start": 93,
                    "end": 100,
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "start": 99,
                      "end": 100,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": false
                }
              ]
            },
            "const": false,
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
