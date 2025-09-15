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
          "start": 17,
          "end": 18
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
                  "start": 38,
                  "end": 39
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
                        "start": 50,
                        "end": 53
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
                                "start": 57,
                                "end": 63
                              },
                              "start": 55,
                              "end": 63
                            },
                            "start": 54,
                            "end": 63
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
                                "start": 86,
                                "end": 87
                              },
                              "start": 79,
                              "end": 88
                            }
                          ],
                          "start": 65,
                          "end": 98
                        },
                        "expression": false,
                        "start": 53,
                        "end": 98
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 50,
                      "end": 98
                    }
                  ],
                  "start": 40,
                  "end": 104
                },
                "abstract": false,
                "declare": false,
                "start": 32,
                "end": 104
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 104
            }
          ],
          "start": 19,
          "end": 106
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 106
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
          "start": 125,
          "end": 127
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
                  "start": 151,
                  "end": 153
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "TSImportEqualsDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 171,
                        "end": 172
                      },
                      "moduleReference": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 175,
                          "end": 176
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 177,
                          "end": 178
                        },
                        "start": 175,
                        "end": 178
                      },
                      "importKind": "value",
                      "start": 164,
                      "end": 179
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
                              "start": 199,
                              "end": 204
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 211,
                                "end": 212
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 207,
                              "end": 214
                            },
                            "definite": false,
                            "start": 199,
                            "end": 214
                          }
                        ],
                        "declare": false,
                        "start": 195,
                        "end": 215
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 188,
                      "end": 215
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
                            "start": 228,
                            "end": 238
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
                                "start": 241,
                                "end": 246
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 247,
                                "end": 250
                              },
                              "optional": false,
                              "computed": false,
                              "start": 241,
                              "end": 250
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 251,
                                "end": 253
                              }
                            ],
                            "optional": false,
                            "start": 241,
                            "end": 254
                          },
                          "definite": false,
                          "start": 228,
                          "end": 254
                        }
                      ],
                      "declare": false,
                      "start": 224,
                      "end": 255
                    }
                  ],
                  "start": 154,
                  "end": 261
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 141,
                "end": 261
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 134,
              "end": 261
            }
          ],
          "start": 128,
          "end": 263
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 115,
        "end": 263
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 108,
      "end": 263
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 263
}
```
