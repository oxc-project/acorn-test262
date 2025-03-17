__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 259,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 1,
      "end": 133,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 133,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 104,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 23,
              "end": 104,
              "body": {
                "type": "TSModuleBlock",
                "start": 32,
                "end": 104,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 42,
                    "end": 98,
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 49,
                      "end": 98,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 64,
                        "end": 98,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 78,
                            "end": 88,
                            "argument": {
                              "type": "Literal",
                              "start": 85,
                              "end": 87,
                              "raw": "\"\"",
                              "value": ""
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 61,
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
                "start": 30,
                "end": 31,
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
            "start": 109,
            "end": 131,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 116,
              "end": 131,
              "body": {
                "type": "TSInterfaceBody",
                "start": 128,
                "end": 131,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
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
        "start": 8,
        "end": 9,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 134,
      "end": 259,
      "body": {
        "type": "TSModuleBlock",
        "start": 145,
        "end": 259,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 151,
            "end": 166,
            "id": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 162,
              "end": 165,
              "left": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 171,
            "end": 186,
            "id": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 182,
              "end": 185,
              "left": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 192,
            "end": 221,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 199,
              "end": 221,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 214,
                "end": 221,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 208,
                "end": 211,
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
            "start": 226,
            "end": 234,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 226,
              "end": 233,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 226,
                "end": 231,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 231,
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
        "start": 141,
        "end": 144,
        "left": {
          "type": "Identifier",
          "start": 141,
          "end": 142,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 143,
          "end": 144,
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
