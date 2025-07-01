__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 20
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 31
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 32,
                    "end": 38
                  }
                ],
                "start": 31,
                "end": 39
              },
              "start": 24,
              "end": 39
            },
            "start": 22,
            "end": 39
          },
          "start": 21,
          "end": 39
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 67
                  },
                  "initializer": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 77
                    },
                    "start": 70,
                    "end": 77
                  },
                  "computed": false,
                  "start": 64,
                  "end": 77
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 90
                  },
                  "initializer": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 99,
                      "end": 100
                    },
                    "start": 93,
                    "end": 100
                  },
                  "computed": false,
                  "start": 87,
                  "end": 100
                }
              ],
              "start": 54,
              "end": 107
            },
            "const": false,
            "declare": false,
            "start": 47,
            "end": 107
          }
        ],
        "start": 41,
        "end": 109
      },
      "expression": false,
      "start": 0,
      "end": 109
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 109
}
```
