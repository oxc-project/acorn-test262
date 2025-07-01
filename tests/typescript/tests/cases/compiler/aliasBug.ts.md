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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
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
                "name": "Provide",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 41
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 42,
                "end": 49
              },
              "abstract": false,
              "declare": false,
              "start": 28,
              "end": 49
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 21,
            "end": 49
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 72
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
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 92
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
                                "name": "boo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 107,
                                "end": 110
                              },
                              "typeParameters": null,
                              "superClass": null,
                              "superTypeArguments": null,
                              "implements": [],
                              "body": {
                                "type": "ClassBody",
                                "body": [],
                                "start": 111,
                                "end": 113
                              },
                              "abstract": false,
                              "declare": false,
                              "start": 101,
                              "end": 113
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 94,
                            "end": 113
                          }
                        ],
                        "start": 93,
                        "end": 114
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false,
                      "start": 82,
                      "end": 114
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 75,
                    "end": 114
                  }
                ],
                "start": 73,
                "end": 115
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 62,
              "end": 115
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 55,
            "end": 115
          }
        ],
        "start": 11,
        "end": 117
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 117
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "provide",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 133
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 139
      },
      "importKind": "value",
      "start": 119,
      "end": 140
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "booz",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 152
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 158
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 162
          },
          "start": 155,
          "end": 162
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 166
        },
        "start": 155,
        "end": 166
      },
      "importKind": "value",
      "start": 141,
      "end": 167
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 174
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "provide",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 188
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Provide",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 196
              },
              "optional": false,
              "computed": false,
              "start": 181,
              "end": 196
            },
            "typeArguments": null,
            "arguments": [],
            "start": 177,
            "end": 198
          },
          "definite": false,
          "start": 173,
          "end": 198
        }
      ],
      "declare": false,
      "start": 169,
      "end": 199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 213
      },
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "provide",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 228,
                          "end": 235
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Provide",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 236,
                          "end": 243
                        },
                        "start": 228,
                        "end": 243
                      },
                      "typeArguments": null,
                      "start": 228,
                      "end": 243
                    },
                    "start": 226,
                    "end": 243
                  },
                  "start": 224,
                  "end": 243
                },
                "init": null,
                "definite": false,
                "start": 224,
                "end": 243
              }
            ],
            "declare": false,
            "start": 220,
            "end": 244
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
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 289,
                          "end": 292
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Provide",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 293,
                          "end": 300
                        },
                        "start": 289,
                        "end": 300
                      },
                      "typeArguments": null,
                      "start": 289,
                      "end": 300
                    },
                    "start": 287,
                    "end": 300
                  },
                  "start": 285,
                  "end": 300
                },
                "init": null,
                "definite": false,
                "start": 285,
                "end": 300
              }
            ],
            "declare": false,
            "start": 281,
            "end": 301
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
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "booz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 311,
                          "end": 315
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 316,
                          "end": 319
                        },
                        "start": 311,
                        "end": 319
                      },
                      "typeArguments": null,
                      "start": 311,
                      "end": 319
                    },
                    "start": 310,
                    "end": 319
                  },
                  "start": 308,
                  "end": 319
                },
                "init": null,
                "definite": false,
                "start": 308,
                "end": 319
              }
            ],
            "declare": false,
            "start": 304,
            "end": 320
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
                  "name": "p22",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 330
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "provide",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 344
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Provide",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 352
                    },
                    "optional": false,
                    "computed": false,
                    "start": 337,
                    "end": 352
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 333,
                  "end": 354
                },
                "definite": false,
                "start": 327,
                "end": 354
              }
            ],
            "declare": false,
            "start": 323,
            "end": 355
          }
        ],
        "start": 216,
        "end": 357
      },
      "expression": false,
      "start": 201,
      "end": 357
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 357
}
```
