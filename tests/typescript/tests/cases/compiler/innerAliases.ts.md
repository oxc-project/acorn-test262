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
        "start": 10,
        "end": 11
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
                "start": 35,
                "end": 36
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
                        "start": 64,
                        "end": 65
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
                                "start": 93,
                                "end": 99
                              },
                              "typeParameters": null,
                              "superClass": null,
                              "superTypeArguments": null,
                              "implements": [],
                              "body": {
                                "type": "ClassBody",
                                "body": [],
                                "start": 100,
                                "end": 102
                              },
                              "abstract": false,
                              "declare": false,
                              "start": 87,
                              "end": 102
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 80,
                            "end": 102
                          }
                        ],
                        "start": 66,
                        "end": 112
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 54,
                      "end": 112
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 47,
                    "end": 112
                  }
                ],
                "start": 37,
                "end": 118
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 25,
              "end": 118
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 118
          }
        ],
        "start": 12,
        "end": 120
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 120
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 133
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
              "start": 147,
              "end": 152
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
                  "start": 155,
                  "end": 156
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 158
                },
                "start": 155,
                "end": 158
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 160
              },
              "start": 155,
              "end": 160
            },
            "importKind": "value",
            "start": 140,
            "end": 161
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
                  "start": 175,
                  "end": 177
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
                      "start": 184,
                      "end": 189
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Class1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 196
                    },
                    "optional": false,
                    "computed": false,
                    "start": 184,
                    "end": 196
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 180,
                  "end": 198
                },
                "definite": false,
                "start": 175,
                "end": 198
              }
            ],
            "declare": false,
            "start": 171,
            "end": 199
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
                "start": 223,
                "end": 224
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
                        "start": 249,
                        "end": 255
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 256,
                        "end": 258
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 243,
                      "end": 258
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 236,
                    "end": 258
                  }
                ],
                "start": 225,
                "end": 264
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 213,
              "end": 264
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 206,
            "end": 264
          }
        ],
        "start": 134,
        "end": 266
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 122,
      "end": 266
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
                      "start": 275,
                      "end": 276
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 282
                    },
                    "start": 275,
                    "end": 282
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Class1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 289
                  },
                  "start": 275,
                  "end": 289
                },
                "typeArguments": null,
                "start": 275,
                "end": 289
              },
              "start": 273,
              "end": 289
            },
            "start": 272,
            "end": 289
          },
          "init": null,
          "definite": false,
          "start": 272,
          "end": 289
        }
      ],
      "declare": false,
      "start": 268,
      "end": 290
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
          "start": 292,
          "end": 293
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
                "start": 300,
                "end": 301
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 307
              },
              "optional": false,
              "computed": false,
              "start": 300,
              "end": 307
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Class1",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 314
            },
            "optional": false,
            "computed": false,
            "start": 300,
            "end": 314
          },
          "typeArguments": null,
          "arguments": [],
          "start": 296,
          "end": 316
        },
        "start": 292,
        "end": 316
      },
      "directive": null,
      "start": 292,
      "end": 317
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 318
}
```
