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
          "name": "App",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 17
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
                  "name": "Services",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 46
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
                          "name": "UserServices",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 70,
                          "end": 82
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
                                "name": "getUserName",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 104,
                                "end": 115
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 119,
                                    "end": 125
                                  },
                                  "start": 117,
                                  "end": 125
                                },
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": "Bill Gates",
                                        "raw": "\"Bill Gates\"",
                                        "start": 151,
                                        "end": 163
                                      },
                                      "start": 144,
                                      "end": 164
                                    }
                                  ],
                                  "start": 126,
                                  "end": 178
                                },
                                "expression": false,
                                "start": 115,
                                "end": 178
                              },
                              "kind": "method",
                              "computed": false,
                              "static": false,
                              "override": false,
                              "optional": false,
                              "accessibility": "public",
                              "start": 97,
                              "end": 178
                            }
                          ],
                          "start": 83,
                          "end": 188
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 64,
                        "end": 188
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 57,
                      "end": 188
                    }
                  ],
                  "start": 47,
                  "end": 194
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 31,
                "end": 194
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 24,
              "end": 194
            }
          ],
          "start": 18,
          "end": 196
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 196
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 196
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 197
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "appJs",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "file1",
          "raw": "\"file1\"",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Services",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 48
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "appJs",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 56
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "App",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 60
          },
          "start": 51,
          "end": 60
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Services",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 69
        },
        "start": 51,
        "end": 69
      },
      "importKind": "value",
      "start": 33,
      "end": 70
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Services",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 91
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "UserServices",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 104
                  },
                  "optional": false,
                  "computed": false,
                  "start": 83,
                  "end": 104
                },
                "typeArguments": null,
                "arguments": [],
                "start": 79,
                "end": 106
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getUserName",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 118
              },
              "optional": false,
              "computed": false,
              "start": 79,
              "end": 118
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 79,
            "end": 120
          },
          "definite": false,
          "start": 75,
          "end": 120
        }
      ],
      "declare": false,
      "start": 71,
      "end": 121
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 121
}
```
