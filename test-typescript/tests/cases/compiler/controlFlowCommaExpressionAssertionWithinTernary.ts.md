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
        "name": "assert",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 34,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 34,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 31,
              "end": 34
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": true,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 67,
          "end": 99,
          "name": "param",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 272,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 122,
            "end": 154,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 128,
                "end": 153,
                "id": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 131,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 134,
                  "end": 153,
                  "left": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 139,
                    "name": "param",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 153,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
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
                "name": "val",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "assert",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 180,
                        "end": 199,
                        "left": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 185,
                          "name": "param",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 199,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "Identifier",
                    "start": 202,
                    "end": 207,
                    "name": "param",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "declare": false,
      "typeParameters": null,
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
