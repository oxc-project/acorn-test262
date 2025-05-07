__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 258,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 132,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 132,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 103,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 103,
              "body": {
                "type": "TSModuleBlock",
                "start": 31,
                "end": 103,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 41,
                    "end": 97,
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 48,
                      "end": 97,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 63,
                        "end": 97,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 77,
                            "end": 87,
                            "argument": {
                              "type": "Literal",
                              "start": 84,
                              "end": 86,
                              "raw": "\"\"",
                              "value": "",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 60,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
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
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 108,
            "end": 130,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 115,
              "end": 130,
              "body": {
                "type": "TSInterfaceBody",
                "start": 127,
                "end": 130,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 133,
      "end": 258,
      "body": {
        "type": "TSModuleBlock",
        "start": 144,
        "end": 258,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 150,
            "end": 165,
            "id": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 161,
              "end": 164,
              "left": {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 170,
            "end": 185,
            "id": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 181,
              "end": 184,
              "left": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 191,
            "end": 220,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 198,
              "end": 220,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 213,
                "end": 220,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 207,
                "end": 210,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExpressionStatement",
            "start": 225,
            "end": 233,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 225,
              "end": 232,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 225,
                "end": 230,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 230,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 140,
        "end": 143,
        "left": {
          "type": "Identifier",
          "start": 140,
          "end": 141,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
