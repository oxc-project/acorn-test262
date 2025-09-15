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
          "name": "a",
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
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 43
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
                          "start": 71,
                          "end": 72
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [
                            {
                              "type": "TSMethodSignature",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 87,
                                "end": 90
                              },
                              "computed": false,
                              "optional": false,
                              "kind": "method",
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "accessibility": null,
                              "readonly": false,
                              "static": false,
                              "start": 87,
                              "end": 93
                            }
                          ],
                          "start": 73,
                          "end": 103
                        },
                        "declare": false,
                        "start": 61,
                        "end": 103
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 54,
                      "end": 103
                    }
                  ],
                  "start": 44,
                  "end": 109
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 32,
                "end": 109
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 109
            }
          ],
          "start": 19,
          "end": 111
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 111
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 111
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 131
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 153
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 157
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 159
                  },
                  "start": 156,
                  "end": 159
                },
                "importKind": "value",
                "start": 145,
                "end": 160
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 138,
              "end": 160
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
                      "name": "x",
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 179,
                              "end": 180
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 181,
                              "end": 182
                            },
                            "start": 179,
                            "end": 182
                          },
                          "typeArguments": null,
                          "start": 179,
                          "end": 182
                        },
                        "start": 177,
                        "end": 182
                      },
                      "start": 176,
                      "end": 182
                    },
                    "init": null,
                    "definite": false,
                    "start": 176,
                    "end": 182
                  }
                ],
                "declare": false,
                "start": 172,
                "end": 183
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 165,
              "end": 183
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 189
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 193
                  },
                  "optional": false,
                  "computed": false,
                  "start": 188,
                  "end": 193
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 188,
                "end": 195
              },
              "directive": null,
              "start": 188,
              "end": 196
            }
          ],
          "start": 132,
          "end": 198
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 120,
        "end": 198
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 113,
      "end": 198
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 198
}
```
