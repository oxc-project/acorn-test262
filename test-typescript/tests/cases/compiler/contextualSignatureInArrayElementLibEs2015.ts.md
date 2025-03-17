__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 83,
  "end": 240,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 83,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 104,
        "name": "test",
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
          "start": 108,
          "end": 181,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 181,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 113,
              "end": 181,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 113,
                  "end": 150,
                  "typeName": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 119,
                    "name": "Record",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 119,
                    "end": 150,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 120,
                        "end": 126
                      },
                      {
                        "type": "TSFunctionType",
                        "start": 128,
                        "end": 149,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 129,
                            "end": 140,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 132,
                              "end": 140,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 134,
                                "end": 140
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 142,
                          "end": 149,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 145,
                            "end": 149
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 153,
                  "end": 181,
                  "typeName": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 158,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 158,
                    "end": 181,
                    "params": [
                      {
                        "type": "TSFunctionType",
                        "start": 159,
                        "end": 180,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 160,
                            "end": 171,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 163,
                              "end": 171,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 165,
                                "end": 171
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 173,
                          "end": 180,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 176,
                            "end": 180
                          }
                        }
                      }
                    ]
                  }
                }
              ]
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
        "start": 183,
        "end": 189,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 185,
          "end": 189
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 239,
      "expression": {
        "type": "CallExpression",
        "start": 192,
        "end": 238,
        "callee": {
          "type": "Identifier",
          "start": 192,
          "end": 196,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 197,
            "end": 237,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 201,
                "end": 234,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 202,
                    "end": 205,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 210,
                  "end": 234,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 216,
                      "end": 220,
                      "expression": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 219,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
