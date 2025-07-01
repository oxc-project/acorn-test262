__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 25
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "italic",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 38
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 41,
                  "end": 48
                },
                "start": 39,
                "end": 48
              },
              "accessibility": null,
              "static": false,
              "start": 32,
              "end": 49
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bold",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 58
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 61,
                  "end": 68
                },
                "start": 59,
                "end": 68
              },
              "accessibility": null,
              "static": false,
              "start": 54,
              "end": 69
            }
          ],
          "start": 26,
          "end": 71
        },
        "declare": false,
        "start": 7,
        "end": 71
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 71
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 93
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 104,
                      "end": 110
                    },
                    "start": 102,
                    "end": 110
                  },
                  "start": 101,
                  "end": 110
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IOptions",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 121
                  },
                  "typeArguments": null,
                  "start": 113,
                  "end": 121
                },
                "start": 111,
                "end": 121
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 100,
              "end": 122
            }
          ],
          "start": 94,
          "end": 124
        },
        "declare": false,
        "start": 79,
        "end": 124
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 72,
      "end": 124
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bug",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 135
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 161
                },
                "typeArguments": null,
                "start": 157,
                "end": 161
              },
              "start": 155,
              "end": 161
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 142,
            "end": 162
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 169
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 182,
                          "end": 186
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "values",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 187,
                          "end": 193
                        },
                        "optional": false,
                        "computed": false,
                        "start": 182,
                        "end": 193
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 196,
                        "end": 198
                      },
                      "start": 182,
                      "end": 198
                    },
                    "directive": null,
                    "start": 182,
                    "end": 199
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 208,
                            "end": 212
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "values",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 213,
                            "end": 219
                          },
                          "optional": false,
                          "computed": false,
                          "start": 208,
                          "end": 219
                        },
                        "property": {
                          "type": "Literal",
                          "value": "comments",
                          "raw": "'comments'",
                          "start": 220,
                          "end": 230
                        },
                        "optional": false,
                        "computed": true,
                        "start": 208,
                        "end": 231
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
                              "name": "italic",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 236,
                              "end": 242
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 244,
                              "end": 248
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 236,
                            "end": 248
                          }
                        ],
                        "start": 234,
                        "end": 250
                      },
                      "start": 208,
                      "end": 250
                    },
                    "directive": null,
                    "start": 208,
                    "end": 251
                  }
                ],
                "start": 172,
                "end": 257
              },
              "expression": false,
              "start": 169,
              "end": 257
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 167,
            "end": 257
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shouldBeOK",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 272
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 285,
                          "end": 289
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "values",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 290,
                          "end": 296
                        },
                        "optional": false,
                        "computed": false,
                        "start": 285,
                        "end": 296
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
                              "name": "comments",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 313,
                              "end": 321
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
                                    "name": "italic",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 325,
                                    "end": 331
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 333,
                                    "end": 337
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 325,
                                  "end": 337
                                }
                              ],
                              "start": 323,
                              "end": 339
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 313,
                            "end": 339
                          }
                        ],
                        "start": 299,
                        "end": 349
                      },
                      "start": 285,
                      "end": 349
                    },
                    "directive": null,
                    "start": 285,
                    "end": 350
                  }
                ],
                "start": 275,
                "end": 356
              },
              "expression": false,
              "start": 272,
              "end": 356
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 262,
            "end": 356
          }
        ],
        "start": 136,
        "end": 358
      },
      "abstract": false,
      "declare": false,
      "start": 126,
      "end": 358
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 358
}
```
