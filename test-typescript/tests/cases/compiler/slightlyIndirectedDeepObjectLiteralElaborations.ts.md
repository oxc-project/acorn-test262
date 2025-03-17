__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 270,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                      "name": "d",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 141,
            "name": "q",
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
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 155,
            "name": "x",
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
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 164,
                  "end": 165,
                  "value": 0,
                  "raw": "0"
                }
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "name": "q",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 190,
                              "end": 191,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 208,
                                    "end": 209,
                                    "name": "c",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 229,
                                          "end": 230,
                                          "name": "d",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 232,
                                          "end": 234,
                                          "value": 42,
                                          "raw": "42"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
