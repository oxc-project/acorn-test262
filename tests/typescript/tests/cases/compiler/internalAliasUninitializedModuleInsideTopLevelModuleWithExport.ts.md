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
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 128
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 132
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 134
          },
          "start": 131,
          "end": 134
        },
        "importKind": "value",
        "start": 120,
        "end": 135
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 113,
      "end": 135
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
                      "start": 150,
                      "end": 151
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 152,
                      "end": 153
                    },
                    "start": 150,
                    "end": 153
                  },
                  "typeArguments": null,
                  "start": 150,
                  "end": 153
                },
                "start": 148,
                "end": 153
              },
              "start": 147,
              "end": 153
            },
            "init": null,
            "definite": false,
            "start": 147,
            "end": 153
          }
        ],
        "declare": false,
        "start": 143,
        "end": 154
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 136,
      "end": 154
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
            "start": 155,
            "end": 156
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 160
          },
          "optional": false,
          "computed": false,
          "start": 155,
          "end": 160
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 155,
        "end": 162
      },
      "directive": null,
      "start": 155,
      "end": 163
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 163
}
```
