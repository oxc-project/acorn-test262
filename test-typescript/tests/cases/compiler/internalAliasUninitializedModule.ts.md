__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 98,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 96,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 96,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 31,
                "end": 96,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 41,
                    "end": 90,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 48,
                      "end": 90,
                      "id": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "name": "I",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 60,
                        "end": 90,
                        "body": [
                          {
                            "type": "TSMethodSignature",
                            "start": 74,
                            "end": 80,
                            "key": {
                              "type": "Identifier",
                              "start": 74,
                              "end": 77,
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
    {
      "type": "TSModuleDeclaration",
      "start": 100,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 109,
        "end": 168,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 115,
            "end": 130,
            "id": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 126,
              "end": 129,
              "left": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 135,
            "end": 153,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 142,
              "end": 153,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 146,
                  "end": 152,
                  "id": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 152,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 147,
                      "end": 152,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 149,
                        "end": 152,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 149,
                          "end": 152,
                          "left": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 150,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 152,
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
            "start": 158,
            "end": 166,
            "expression": {
              "type": "CallExpression",
              "start": 158,
              "end": 165,
              "callee": {
                "type": "MemberExpression",
                "start": 158,
                "end": 163,
                "object": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 163,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
