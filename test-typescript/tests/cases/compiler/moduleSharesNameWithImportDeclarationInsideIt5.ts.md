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
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 9,
        "name": "Z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 133,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 104,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 23,
              "end": 104,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 32,
                "end": 104,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 42,
                    "end": 98,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 49,
                      "end": 98,
                      "id": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 61,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": "",
                              "raw": "\"\""
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
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
            "start": 109,
            "end": 131,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 116,
              "end": 131,
              "id": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 128,
                "end": 131,
                "body": []
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
    {
      "type": "TSModuleDeclaration",
      "start": 134,
      "end": 259,
      "id": {
        "type": "TSQualifiedName",
        "start": 141,
        "end": 144,
        "left": {
          "type": "Identifier",
          "start": 141,
          "end": 142,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 143,
          "end": 144,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 162,
              "end": 165,
              "left": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "name": "Z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 171,
            "end": 186,
            "id": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 182,
              "end": 185,
              "left": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "name": "Z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 192,
            "end": 221,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 199,
              "end": 221,
              "id": {
                "type": "Identifier",
                "start": 208,
                "end": 211,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 214,
                "end": 221,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExpressionStatement",
            "start": 226,
            "end": 234,
            "expression": {
              "type": "CallExpression",
              "start": 226,
              "end": 233,
              "callee": {
                "type": "MemberExpression",
                "start": 226,
                "end": 231,
                "object": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 231,
                  "name": "bar",
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
