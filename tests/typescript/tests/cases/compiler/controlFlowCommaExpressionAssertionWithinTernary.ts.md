__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 272,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 34,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 34,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 31,
              "end": 34
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 35,
        "end": 50,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 37,
          "end": 50,
          "parameterName": {
            "type": "Identifier",
            "start": 45,
            "end": 50,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": true,
          "typeAnnotation": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 67,
          "end": 99,
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 99,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 74,
              "end": 99,
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
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 100,
        "end": 115,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 102,
          "end": 115,
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
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 272,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 122,
            "end": 154,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 128,
                "end": 153,
                "id": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 131,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 134,
                  "end": 153,
                  "left": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 139,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 153,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 159,
            "end": 216,
            "argument": {
              "type": "ConditionalExpression",
              "start": 166,
              "end": 215,
              "test": {
                "type": "Identifier",
                "start": 166,
                "end": 169,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "SequenceExpression",
                "start": 173,
                "end": 207,
                "expressions": [
                  {
                    "type": "CallExpression",
                    "start": 173,
                    "end": 200,
                    "callee": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 179,
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 180,
                        "end": 199,
                        "left": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 185,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 199,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 202,
                    "end": 207,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
              },
              "alternate": {
                "type": "Literal",
                "start": 211,
                "end": 215,
                "value": null,
                "raw": "null"
              }
            }
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
