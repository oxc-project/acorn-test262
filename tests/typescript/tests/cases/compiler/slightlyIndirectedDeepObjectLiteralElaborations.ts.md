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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 33,
                      "end": 34
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 50,
                              "end": 51
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
                                      "name": "d",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 71,
                                      "end": 72
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 74,
                                        "end": 80
                                      },
                                      "start": 72,
                                      "end": 80
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 71,
                                    "end": 80
                                  }
                                ],
                                "start": 53,
                                "end": 94
                              },
                              "start": 51,
                              "end": 94
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 50,
                            "end": 94
                          }
                        ],
                        "start": 36,
                        "end": 104
                      },
                      "start": 34,
                      "end": 104
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 33,
                    "end": 104
                  }
                ],
                "start": 23,
                "end": 110
              },
              "start": 21,
              "end": 110
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 110
          }
        ],
        "start": 14,
        "end": 112
      },
      "declare": false,
      "start": 0,
      "end": 112
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 121,
                        "end": 124
                      },
                      "typeArguments": null,
                      "start": 121,
                      "end": 124
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 125,
                        "end": 128
                      },
                      "start": 125,
                      "end": 128
                    },
                    "start": 121,
                    "end": 129
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 132,
                    "end": 141
                  }
                ],
                "start": 121,
                "end": 141
              },
              "start": 119,
              "end": 141
            },
            "start": 118,
            "end": 141
          },
          "init": null,
          "definite": false,
          "start": 118,
          "end": 141
        }
      ],
      "declare": false,
      "start": 114,
      "end": 142
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 155
                },
                "typeArguments": null,
                "start": 152,
                "end": 155
              },
              "start": 150,
              "end": 155
            },
            "start": 149,
            "end": 155
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 164,
                  "end": 165
                },
                "prefix": true,
                "start": 159,
                "end": 165
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 174
                    },
                    "value": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 177
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 190,
                              "end": 191
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
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 208,
                                    "end": 209
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
                                          "name": "d",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 229,
                                          "end": 230
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 42,
                                          "raw": "42",
                                          "start": 232,
                                          "end": 234
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 229,
                                        "end": 234
                                      }
                                    ],
                                    "start": 211,
                                    "end": 248
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 208,
                                  "end": 248
                                }
                              ],
                              "start": 194,
                              "end": 258
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 190,
                            "end": 259
                          }
                        ],
                        "start": 180,
                        "end": 265
                      },
                      "start": 176,
                      "end": 265
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 173,
                    "end": 265
                  }
                ],
                "start": 167,
                "end": 267
              }
            ],
            "start": 159,
            "end": 267
          },
          "definite": false,
          "start": 149,
          "end": 268
        }
      ],
      "declare": false,
      "start": 143,
      "end": 269
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 269
}
```
