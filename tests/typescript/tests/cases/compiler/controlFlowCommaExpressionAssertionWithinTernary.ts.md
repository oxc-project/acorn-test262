__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 23
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 31,
              "end": 34
            },
            "start": 29,
            "end": 34
          },
          "start": 24,
          "end": 34
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 50
          },
          "asserts": true,
          "typeAnnotation": null,
          "start": 37,
          "end": 50
        },
        "start": 35,
        "end": 50
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 74,
                  "end": 80
                },
                {
                  "type": "TSNullKeyword",
                  "start": 83,
                  "end": 87
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 90,
                  "end": 99
                }
              ],
              "start": 74,
              "end": 99
            },
            "start": 72,
            "end": 99
          },
          "start": 67,
          "end": 99
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 102,
              "end": 108
            },
            {
              "type": "TSNullKeyword",
              "start": 111,
              "end": 115
            }
          ],
          "start": 102,
          "end": 115
        },
        "start": 100,
        "end": 115
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 131
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 139
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 153
                  },
                  "start": 134,
                  "end": 153
                },
                "definite": false,
                "start": 128,
                "end": 153
              }
            ],
            "declare": false,
            "start": 122,
            "end": 154
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 169
              },
              "consequent": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 179
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 180,
                          "end": 185
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 190,
                          "end": 199
                        },
                        "start": 180,
                        "end": 199
                      }
                    ],
                    "optional": false,
                    "start": 173,
                    "end": 200
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 207
                  }
                ],
                "start": 173,
                "end": 207
              },
              "alternate": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 211,
                "end": 215
              },
              "start": 166,
              "end": 215
            },
            "start": 159,
            "end": 216
          }
        ],
        "start": 116,
        "end": 272
      },
      "expression": false,
      "start": 53,
      "end": 272
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 272
}
```
