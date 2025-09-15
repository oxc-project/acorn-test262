__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 36
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
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 40,
                      "end": 41
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 40,
                    "end": 42
                  }
                ],
                "start": 37,
                "end": 48
              },
              "declare": false,
              "start": 25,
              "end": 48
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 48
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 68
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 79,
                      "end": 80
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 81,
                      "end": 82
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 72,
                    "end": 83
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 86
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
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
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 89,
                                "end": 90
                              },
                              "typeArguments": null,
                              "start": 89,
                              "end": 90
                            },
                            "start": 88,
                            "end": 90
                          },
                          "start": 87,
                          "end": 90
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 99,
                                "end": 100
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 101,
                                "end": 102
                              },
                              "optional": false,
                              "computed": false,
                              "start": 99,
                              "end": 102
                            },
                            "directive": null,
                            "start": 99,
                            "end": 103
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 125,
                                "end": 126
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 127,
                                "end": 128
                              },
                              "optional": false,
                              "computed": false,
                              "start": 125,
                              "end": 128
                            },
                            "directive": null,
                            "start": 125,
                            "end": 129
                          }
                        ],
                        "start": 92,
                        "end": 140
                      },
                      "expression": false,
                      "start": 86,
                      "end": 140
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 85,
                    "end": 140
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 156
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "z",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 164,
                                        "end": 165
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": 10,
                                        "raw": "10",
                                        "start": 166,
                                        "end": 168
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 164,
                                      "end": 168
                                    },
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "f",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 169,
                                        "end": 170
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 171,
                                          "end": 175
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "f",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 176,
                                          "end": 177
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 171,
                                        "end": 177
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 169,
                                      "end": 177
                                    }
                                  ],
                                  "start": 163,
                                  "end": 178
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 180,
                                  "end": 181
                                },
                                "optional": false,
                                "computed": false,
                                "start": 162,
                                "end": 181
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "TSTypeAssertion",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 183,
                                      "end": 184
                                    },
                                    "typeArguments": null,
                                    "start": 183,
                                    "end": 184
                                  },
                                  "expression": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 186,
                                    "end": 188
                                  },
                                  "start": 182,
                                  "end": 189
                                }
                              ],
                              "optional": false,
                              "start": 162,
                              "end": 190
                            },
                            "directive": null,
                            "start": 162,
                            "end": 191
                          }
                        ],
                        "start": 159,
                        "end": 197
                      },
                      "expression": false,
                      "start": 156,
                      "end": 197
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 145,
                    "end": 197
                  }
                ],
                "start": 69,
                "end": 203
              },
              "abstract": false,
              "declare": false,
              "start": 61,
              "end": 203
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 54,
            "end": 203
          }
        ],
        "start": 12,
        "end": 205
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 205
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 214
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 226,
                      "end": 232
                    },
                    "start": 224,
                    "end": 232
                  },
                  "start": 223,
                  "end": 232
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 234,
                "end": 241
              },
              "expression": false,
              "start": 222,
              "end": 241
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 221,
            "end": 241
          }
        ],
        "start": 215,
        "end": 243
      },
      "abstract": false,
      "declare": false,
      "start": 207,
      "end": 243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 243
}
```
