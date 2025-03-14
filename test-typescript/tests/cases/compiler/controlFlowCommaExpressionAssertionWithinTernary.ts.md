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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "decorators": [],
        "name": "assert",
        "optional": false
      },
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
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "start": 45,
            "end": 50,
            "decorators": [],
            "name": "value",
            "optional": false
          },
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 272,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 131,
                  "decorators": [],
                  "name": "val",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 134,
                  "end": 153,
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 139,
                    "decorators": [],
                    "name": "param",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 153,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 159,
            "end": 216,
            "argument": {
              "type": "ConditionalExpression",
              "start": 166,
              "end": 215,
              "alternate": {
                "type": "Literal",
                "start": 211,
                "end": 215,
                "raw": "null",
                "value": null
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
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 180,
                        "end": 199,
                        "operator": "!==",
                        "left": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 185,
                          "decorators": [],
                          "name": "param",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 199,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 179,
                      "decorators": [],
                      "name": "assert",
                      "optional": false
                    },
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 202,
                    "end": 207,
                    "decorators": [],
                    "name": "param",
                    "optional": false
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 166,
                "end": 169,
                "decorators": [],
                "name": "val",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
