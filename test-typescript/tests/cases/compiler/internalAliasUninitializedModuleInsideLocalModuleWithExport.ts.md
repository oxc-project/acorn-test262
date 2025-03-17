__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 105,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 105,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 105,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 103,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 29,
                "end": 103,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 38,
                  "end": 103,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 48,
                      "end": 97,
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "start": 55,
                        "end": 97,
                        "id": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 66,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "extends": [],
                        "typeParameters": null,
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 67,
                          "end": 97,
                          "body": [
                            {
                              "type": "TSMethodSignature",
                              "start": 81,
                              "end": 87,
                              "key": {
                                "type": "Identifier",
                                "start": 81,
                                "end": 84,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false,
                              "kind": "method",
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "accessibility": null,
                              "readonly": false,
                              "static": false
                            }
                          ]
                        },
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "type"
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 189,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 114,
        "end": 189,
        "id": {
          "type": "Identifier",
          "start": 121,
          "end": 122,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 123,
          "end": 189,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 129,
              "end": 151,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 136,
                "end": 151,
                "id": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 147,
                  "end": 150,
                  "left": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 156,
              "end": 174,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 163,
                "end": 174,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 167,
                    "end": 173,
                    "id": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 173,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 168,
                        "end": 173,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 170,
                          "end": 173,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 170,
                            "end": 173,
                            "left": {
                              "type": "Identifier",
                              "start": 170,
                              "end": 171,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 172,
                              "end": 173,
                              "name": "I",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExpressionStatement",
              "start": 179,
              "end": 187,
              "expression": {
                "type": "CallExpression",
                "start": 179,
                "end": 186,
                "callee": {
                  "type": "MemberExpression",
                  "start": 179,
                  "end": 184,
                  "object": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 180,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 184,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
