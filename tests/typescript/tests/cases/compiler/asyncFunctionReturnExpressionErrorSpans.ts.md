__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 318,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 124,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 122,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 122,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 25,
                "end": 122,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 35,
                    "end": 116,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 38,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 116,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 40,
                        "end": 116,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 54,
                            "end": 106,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 54,
                              "end": 59,
                              "decorators": [],
                              "name": "inner",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 59,
                              "end": 106,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 61,
                                "end": 106,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 79,
                                    "end": 92,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 79,
                                      "end": 84,
                                      "decorators": [],
                                      "name": "thing",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 84,
                                      "end": 92,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 86,
                                        "end": 92
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 126,
      "end": 318,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 149,
        "decorators": [],
        "name": "asyncFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 151,
        "end": 165,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 153,
          "end": 165,
          "typeName": {
            "type": "Identifier",
            "start": 153,
            "end": 160,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 160,
            "end": 165,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 161,
                "end": 164,
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 164,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 166,
        "end": 318,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 172,
            "end": 316,
            "argument": {
              "type": "ObjectExpression",
              "start": 179,
              "end": 316,
              "properties": [
                {
                  "type": "Property",
                  "start": 189,
                  "end": 310,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 192,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 194,
                    "end": 310,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 208,
                        "end": 300,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 211,
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "start": 213,
                          "end": 300,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 231,
                              "end": 286,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 231,
                                "end": 236,
                                "decorators": [],
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "start": 238,
                                "end": 286,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 260,
                                    "end": 268,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 260,
                                      "end": 265,
                                      "decorators": [],
                                      "name": "thing",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 267,
                                      "end": 268,
                                      "value": 1,
                                      "raw": "1"
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  }
                                ]
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
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
