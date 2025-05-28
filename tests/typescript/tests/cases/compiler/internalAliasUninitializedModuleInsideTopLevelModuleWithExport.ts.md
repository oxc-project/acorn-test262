__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "extends": [],
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
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
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
                      "exportKind": "type",
                      "attributes": []
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 129,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 114,
        "end": 129,
        "id": {
          "type": "Identifier",
          "start": 121,
          "end": 122,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 125,
          "end": 128,
          "left": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 130,
      "end": 148,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 137,
        "end": 148,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 141,
            "end": 147,
            "id": {
              "type": "Identifier",
              "start": 141,
              "end": 147,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 142,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 144,
                  "end": 147,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 144,
                    "end": 147,
                    "left": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 145,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 157,
      "expression": {
        "type": "CallExpression",
        "start": 149,
        "end": 156,
        "callee": {
          "type": "MemberExpression",
          "start": 149,
          "end": 154,
          "object": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 151,
            "end": 154,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
