__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 38
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "inner",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 54,
                              "end": 59
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "thing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 79,
                                      "end": 84
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 86,
                                        "end": 92
                                      },
                                      "start": 84,
                                      "end": 92
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 79,
                                    "end": 92
                                  }
                                ],
                                "start": 61,
                                "end": 106
                              },
                              "start": 59,
                              "end": 106
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 54,
                            "end": 106
                          }
                        ],
                        "start": 40,
                        "end": 116
                      },
                      "start": 38,
                      "end": 116
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 35,
                    "end": 116
                  }
                ],
                "start": 25,
                "end": 122
              },
              "start": 23,
              "end": 122
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 122
          }
        ],
        "start": 14,
        "end": 124
      },
      "declare": false,
      "start": 0,
      "end": 124
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 149
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 160
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 164
                },
                "typeArguments": null,
                "start": 161,
                "end": 164
              }
            ],
            "start": 160,
            "end": 165
          },
          "start": 153,
          "end": 165
        },
        "start": 151,
        "end": 165
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 192
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 208,
                          "end": 211
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 231,
                                "end": 236
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "thing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 260,
                                      "end": 265
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 267,
                                      "end": 268
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 260,
                                    "end": 268
                                  }
                                ],
                                "start": 238,
                                "end": 286
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 231,
                              "end": 286
                            }
                          ],
                          "start": 213,
                          "end": 300
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 208,
                        "end": 300
                      }
                    ],
                    "start": 194,
                    "end": 310
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 189,
                  "end": 310
                }
              ],
              "start": 179,
              "end": 316
            },
            "start": 172,
            "end": 316
          }
        ],
        "start": 166,
        "end": 318
      },
      "expression": false,
      "start": 126,
      "end": 318
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 318
}
```
