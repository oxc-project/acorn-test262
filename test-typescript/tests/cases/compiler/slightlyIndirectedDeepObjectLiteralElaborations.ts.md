__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 269,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 112,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 112,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 110,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 23,
                "end": 110,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 33,
                    "end": 104,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 104,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 36,
                        "end": 104,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 50,
                            "end": 94,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 50,
                              "end": 51,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 51,
                              "end": 94,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 53,
                                "end": 94,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 71,
                                    "end": 80,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 71,
                                      "end": 72,
                                      "decorators": [],
                                      "name": "d",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 72,
                                      "end": 80,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 74,
                                        "end": 80
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 141,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 141,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 121,
                "end": 141,
                "types": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 121,
                    "end": 129,
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 125,
                      "end": 128,
                      "literal": {
                        "type": "Literal",
                        "start": 125,
                        "end": 128,
                        "raw": "\"a\"",
                        "value": "a",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 121,
                      "end": 124,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 124,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 132,
                    "end": 141
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 268,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 155,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 155,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 155,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "SequenceExpression",
            "start": 159,
            "end": 267,
            "expressions": [
              {
                "type": "UnaryExpression",
                "start": 159,
                "end": 165,
                "argument": {
                  "type": "Literal",
                  "start": 164,
                  "end": 165,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                "operator": "void",
                "prefix": true
              },
              {
                "type": "ObjectExpression",
                "start": 167,
                "end": 267,
                "properties": [
                  {
                    "type": "Property",
                    "start": 173,
                    "end": 265,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "AssignmentExpression",
                      "start": 176,
                      "end": 265,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 180,
                        "end": 265,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 190,
                            "end": 259,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 190,
                              "end": 191,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectExpression",
                              "start": 194,
                              "end": 258,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 208,
                                  "end": 248,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 208,
                                    "end": 209,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 211,
                                    "end": 248,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 229,
                                        "end": 234,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 229,
                                          "end": 230,
                                          "decorators": [],
                                          "name": "d",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 232,
                                          "end": 234,
                                          "raw": "42",
                                          "value": 42,
                                          "regex": null,
                                          "bigint": null
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
