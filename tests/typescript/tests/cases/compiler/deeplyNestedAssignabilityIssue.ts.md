__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 430,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
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
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 47,
        "decorators": [],
        "name": "Large",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 48,
        "end": 229,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 54,
            "end": 227,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 63,
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 227,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 65,
                "end": 227,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 75,
                    "end": 221,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 82,
                      "decorators": [],
                      "name": "another",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 221,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 84,
                        "end": 221,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 98,
                            "end": 145,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 98,
                              "end": 102,
                              "decorators": [],
                              "name": "more",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 102,
                              "end": 145,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 104,
                                "end": 145,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 122,
                                    "end": 131,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 122,
                                      "end": 127,
                                      "decorators": [],
                                      "name": "thing",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 127,
                                      "end": 130,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 129,
                                        "end": 130,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 129,
                                          "end": 130,
                                          "decorators": [],
                                          "name": "A",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
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
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 158,
                            "end": 211,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 158,
                              "end": 166,
                              "decorators": [],
                              "name": "yetstill",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 166,
                              "end": 211,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 168,
                                "end": 211,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 186,
                                    "end": 197,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 186,
                                      "end": 193,
                                      "decorators": [],
                                      "name": "another",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 193,
                                      "end": 196,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 195,
                                        "end": 196,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 195,
                                          "end": 196,
                                          "decorators": [],
                                          "name": "A",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 231,
      "end": 430,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 430,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 245,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 240,
                "end": 245,
                "typeName": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 245,
                  "decorators": [],
                  "name": "Large",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 248,
            "end": 430,
            "properties": [
              {
                "type": "Property",
                "start": 254,
                "end": 428,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 263,
                  "decorators": [],
                  "name": "something",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 265,
                  "end": 428,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 275,
                      "end": 422,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 275,
                        "end": 282,
                        "decorators": [],
                        "name": "another",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 284,
                        "end": 422,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 298,
                            "end": 345,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 298,
                              "end": 302,
                              "decorators": [],
                              "name": "more",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 304,
                              "end": 345,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 322,
                                  "end": 331,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 322,
                                    "end": 327,
                                    "decorators": [],
                                    "name": "thing",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 329,
                                    "end": 331,
                                    "properties": []
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
                          },
                          {
                            "type": "Property",
                            "start": 359,
                            "end": 412,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 359,
                              "end": 367,
                              "decorators": [],
                              "name": "yetstill",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 369,
                              "end": 412,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 387,
                                  "end": 398,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 387,
                                    "end": 394,
                                    "decorators": [],
                                    "name": "another",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 396,
                                    "end": 398,
                                    "properties": []
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
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
