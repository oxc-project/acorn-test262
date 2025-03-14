__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 105,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 105,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 105,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 103,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 29,
                "end": 103,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 38,
                  "end": 103,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 48,
                      "end": 97,
                      "attributes": [],
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "start": 55,
                        "end": 97,
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 67,
                          "end": 97,
                          "body": [
                            {
                              "type": "TSMethodSignature",
                              "start": 81,
                              "end": 87,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 81,
                                "end": 84,
                                "decorators": [],
                                "name": "foo",
                                "optional": false
                              },
                              "kind": "method",
                              "optional": false,
                              "params": [],
                              "readonly": false,
                              "static": false
                            }
                          ]
                        },
                        "declare": false,
                        "extends": [],
                        "id": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 66,
                          "decorators": [],
                          "name": "I",
                          "optional": false
                        }
                      },
                      "exportKind": "type",
                      "source": null,
                      "specifiers": []
                    }
                  ]
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "module"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 129,
      "attributes": [],
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
          "optional": false
        },
        "importKind": "value",
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
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 130,
      "end": 148,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 137,
        "end": 148,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 141,
            "end": 147,
            "definite": false,
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
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "decorators": [],
                      "name": "I",
                      "optional": false
                    }
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 157,
      "expression": {
        "type": "CallExpression",
        "start": 149,
        "end": 156,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 149,
          "end": 154,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 151,
            "end": 154,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
