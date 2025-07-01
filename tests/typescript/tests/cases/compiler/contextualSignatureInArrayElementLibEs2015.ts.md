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
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 104
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 119
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 120,
                        "end": 126
                      },
                      {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 134,
                                "end": 140
                              },
                              "start": 132,
                              "end": 140
                            },
                            "start": 129,
                            "end": 140
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 145,
                            "end": 149
                          },
                          "start": 142,
                          "end": 149
                        },
                        "start": 128,
                        "end": 149
                      }
                    ],
                    "start": 119,
                    "end": 150
                  },
                  "start": 113,
                  "end": 150
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 158
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 165,
                                "end": 171
                              },
                              "start": 163,
                              "end": 171
                            },
                            "start": 160,
                            "end": 171
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 176,
                            "end": 180
                          },
                          "start": 173,
                          "end": 180
                        },
                        "start": 159,
                        "end": 180
                      }
                    ],
                    "start": 158,
                    "end": 181
                  },
                  "start": 153,
                  "end": 181
                }
              ],
              "start": 113,
              "end": 181
            },
            "start": 111,
            "end": 181
          },
          "start": 108,
          "end": 181
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 185,
          "end": 189
        },
        "start": 183,
        "end": 189
      },
      "body": null,
      "expression": false,
      "start": 83,
      "end": 190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 196
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 205
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 216,
                        "end": 219
                      },
                      "directive": null,
                      "start": 216,
                      "end": 220
                    }
                  ],
                  "start": 210,
                  "end": 234
                },
                "id": null,
                "generator": false,
                "start": 201,
                "end": 234
              }
            ],
            "start": 197,
            "end": 237
          }
        ],
        "optional": false,
        "start": 192,
        "end": 238
      },
      "directive": null,
      "start": 192,
      "end": 239
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 83,
  "end": 239
}
```
