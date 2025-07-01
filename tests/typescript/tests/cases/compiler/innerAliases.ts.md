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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 55,
                        "end": 56
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
                                "name": "Class1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 84,
                                "end": 90
                              },
                              "typeParameters": null,
                              "superClass": null,
                              "superTypeArguments": null,
                              "implements": [],
                              "body": {
                                "type": "ClassBody",
                                "body": [],
                                "start": 91,
                                "end": 93
                              },
                              "abstract": false,
                              "declare": false,
                              "start": 78,
                              "end": 93
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 71,
                            "end": 93
                          }
                        ],
                        "start": 57,
                        "end": 103
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false,
                      "start": 48,
                      "end": 103
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 41,
                    "end": 103
                  }
                ],
                "start": 31,
                "end": 109
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 22,
              "end": 109
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 109
          }
        ],
        "start": 9,
        "end": 111
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 111
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 121
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 140
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 144
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "start": 143,
                "end": 146
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 148
              },
              "start": 143,
              "end": 148
            },
            "importKind": "value",
            "start": 128,
            "end": 149
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 165
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 177
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Class1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 184
                    },
                    "optional": false,
                    "computed": false,
                    "start": 172,
                    "end": 184
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 168,
                  "end": 186
                },
                "definite": false,
                "start": 163,
                "end": 186
              }
            ],
            "declare": false,
            "start": 159,
            "end": 187
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 209
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
                        "name": "Class2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 234,
                        "end": 240
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 241,
                        "end": 243
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 228,
                      "end": 243
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 221,
                    "end": 243
                  }
                ],
                "start": 210,
                "end": 249
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 201,
              "end": 249
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 194,
            "end": 249
          }
        ],
        "start": 122,
        "end": 251
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 113,
      "end": 251
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 261
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 267
                    },
                    "start": 260,
                    "end": 267
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Class1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 274
                  },
                  "start": 260,
                  "end": 274
                },
                "typeArguments": null,
                "start": 260,
                "end": 274
              },
              "start": 258,
              "end": 274
            },
            "start": 257,
            "end": 274
          },
          "init": null,
          "definite": false,
          "start": 257,
          "end": 274
        }
      ],
      "declare": false,
      "start": 253,
      "end": 275
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 278
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 286
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 292
              },
              "optional": false,
              "computed": false,
              "start": 285,
              "end": 292
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Class1",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 299
            },
            "optional": false,
            "computed": false,
            "start": 285,
            "end": 299
          },
          "typeArguments": null,
          "arguments": [],
          "start": 281,
          "end": 301
        },
        "start": 277,
        "end": 301
      },
      "directive": null,
      "start": 277,
      "end": 302
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 303
}
```
