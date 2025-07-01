__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 15
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 36
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 47,
                        "end": 50
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 54,
                                "end": 60
                              },
                              "start": 52,
                              "end": 60
                            },
                            "start": 51,
                            "end": 60
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 83,
                                "end": 84
                              },
                              "start": 76,
                              "end": 85
                            }
                          ],
                          "start": 62,
                          "end": 95
                        },
                        "expression": false,
                        "start": 50,
                        "end": 95
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 47,
                      "end": 95
                    }
                  ],
                  "start": 37,
                  "end": 101
                },
                "abstract": false,
                "declare": false,
                "start": 29,
                "end": 101
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 22,
              "end": 101
            }
          ],
          "start": 16,
          "end": 103
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 103
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 103
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 121
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 144
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "TSImportEqualsDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 170
                        },
                        "moduleReference": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 174
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 175,
                            "end": 176
                          },
                          "start": 173,
                          "end": 176
                        },
                        "importKind": "value",
                        "start": 162,
                        "end": 177
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 155,
                      "end": 177
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cProp",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 197,
                              "end": 202
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 209,
                                "end": 210
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 205,
                              "end": 212
                            },
                            "definite": false,
                            "start": 197,
                            "end": 212
                          }
                        ],
                        "declare": false,
                        "start": 193,
                        "end": 213
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 186,
                      "end": 213
                    },
                    {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cReturnVal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 226,
                            "end": 236
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "cProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 239,
                                "end": 244
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 245,
                                "end": 248
                              },
                              "optional": false,
                              "computed": false,
                              "start": 239,
                              "end": 248
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 249,
                                "end": 251
                              }
                            ],
                            "optional": false,
                            "start": 239,
                            "end": 252
                          },
                          "definite": false,
                          "start": 226,
                          "end": 252
                        }
                      ],
                      "declare": false,
                      "start": 222,
                      "end": 253
                    }
                  ],
                  "start": 145,
                  "end": 259
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 135,
                "end": 259
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 128,
              "end": 259
            }
          ],
          "start": 122,
          "end": 261
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 112,
        "end": 261
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 105,
      "end": 261
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 275
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 282,
                    "end": 284
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 287
                  },
                  "optional": false,
                  "computed": false,
                  "start": 282,
                  "end": 287
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 289
                },
                "optional": false,
                "computed": false,
                "start": 282,
                "end": 289
              },
              "typeArguments": null,
              "arguments": [],
              "start": 278,
              "end": 291
            },
            "definite": false,
            "start": 274,
            "end": 291
          }
        ],
        "declare": false,
        "start": 270,
        "end": 292
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 263,
      "end": 292
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 292
}
```
