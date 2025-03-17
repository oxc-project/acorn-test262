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
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 39,
          "name": "x",
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
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 64,
                "end": 77,
                "id": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 67,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            ],
            "const": false,
            "declare": false,
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
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                    "name": "baz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
