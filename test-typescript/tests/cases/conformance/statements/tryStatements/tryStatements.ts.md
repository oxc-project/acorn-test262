__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 296,
        "body": [
          {
            "type": "TryStatement",
            "start": 20,
            "end": 37,
            "block": {
              "type": "BlockStatement",
              "start": 24,
              "end": 27,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 28,
              "end": 37,
              "param": null,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 37,
                "body": []
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 43,
            "end": 156,
            "block": {
              "type": "BlockStatement",
              "start": 47,
              "end": 50,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 51,
              "end": 156,
              "param": null,
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 156,
                "body": [
                  {
                    "type": "TryStatement",
                    "start": 68,
                    "end": 124,
                    "block": {
                      "type": "BlockStatement",
                      "start": 72,
                      "end": 75,
                      "body": []
                    },
                    "handler": {
                      "type": "CatchClause",
                      "start": 76,
                      "end": 124,
                      "param": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 82,
                        "end": 124,
                        "body": [
                          {
                            "type": "TryStatement",
                            "start": 97,
                            "end": 114,
                            "block": {
                              "type": "BlockStatement",
                              "start": 101,
                              "end": 104,
                              "body": []
                            },
                            "handler": {
                              "type": "CatchClause",
                              "start": 105,
                              "end": 114,
                              "param": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 111,
                                "end": 114,
                                "body": []
                              }
                            },
                            "finalizer": null
                          }
                        ]
                      }
                    },
                    "finalizer": null
                  },
                  {
                    "type": "TryStatement",
                    "start": 133,
                    "end": 150,
                    "block": {
                      "type": "BlockStatement",
                      "start": 137,
                      "end": 140,
                      "body": []
                    },
                    "handler": {
                      "type": "CatchClause",
                      "start": 141,
                      "end": 150,
                      "param": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 147,
                        "end": 150,
                        "body": []
                      }
                    },
                    "finalizer": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 162,
            "end": 195,
            "block": {
              "type": "BlockStatement",
              "start": 166,
              "end": 169,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 170,
              "end": 195,
              "param": {
                "type": "Identifier",
                "start": 177,
                "end": 178,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 180,
                "end": 195,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 182,
                    "end": 193,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 186,
                        "end": 192,
                        "id": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 192,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 187,
                            "end": 192,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 189,
                              "end": 192
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "TryStatement",
            "start": 201,
            "end": 220,
            "block": {
              "type": "BlockStatement",
              "start": 205,
              "end": 208,
              "body": []
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "start": 217,
              "end": 220,
              "body": []
            }
          },
          {
            "type": "TryStatement",
            "start": 226,
            "end": 255,
            "block": {
              "type": "BlockStatement",
              "start": 230,
              "end": 233,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 234,
              "end": 243,
              "param": null,
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 243,
                "body": []
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 252,
              "end": 255,
              "body": []
            }
          },
          {
            "type": "TryStatement",
            "start": 261,
            "end": 294,
            "block": {
              "type": "BlockStatement",
              "start": 265,
              "end": 268,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 269,
              "end": 282,
              "param": {
                "type": "Identifier",
                "start": 276,
                "end": 277,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 279,
                "end": 282,
                "body": []
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 291,
              "end": 294,
              "body": []
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
