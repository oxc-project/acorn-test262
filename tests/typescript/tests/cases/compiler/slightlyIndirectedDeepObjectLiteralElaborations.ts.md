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
        "end": 112,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 110,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 50,
                              "end": 51,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
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
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 71,
                                      "end": 72,
                                      "decorators": [],
                                      "name": "d",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 72,
                                      "end": 80,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 74,
                                        "end": 80
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
      "start": 114,
      "end": 142,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 141,
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
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 121,
                      "end": 124,
                      "typeName": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 124,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 125,
                      "end": 128,
                      "literal": {
                        "type": "Literal",
                        "start": 125,
                        "end": 128,
                        "value": "a",
                        "raw": "\"a\""
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 269,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 268,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 155,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "operator": "void",
                "argument": {
                  "type": "Literal",
                  "start": 164,
                  "end": 165,
                  "value": 0,
                  "raw": "0"
                },
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 190,
                              "end": 191,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 194,
                              "end": 258,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 208,
                                  "end": 248,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 208,
                                    "end": 209,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 211,
                                    "end": 248,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 229,
                                        "end": 234,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 229,
                                          "end": 230,
                                          "decorators": [],
                                          "name": "d",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 232,
                                          "end": 234,
                                          "value": 42,
                                          "raw": "42"
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
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
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
