__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 80,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 80,
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
          "end": 80,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 78,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 29,
                "end": 78,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 41,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 42,
                    "end": 51,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 51,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 45,
                        "end": 51
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 53,
                  "end": 78,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 63,
                      "end": 72,
                      "argument": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 71,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "expression": false
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
      "start": 82,
      "end": 185,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 89,
        "end": 185,
        "id": {
          "type": "Identifier",
          "start": 96,
          "end": 97,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 98,
          "end": 185,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 104,
              "end": 128,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 111,
                "end": 128,
                "id": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 122,
                  "end": 127,
                  "left": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 123,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 127,
                    "decorators": [],
                    "name": "foo",
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
              "start": 133,
              "end": 157,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 140,
                "end": 157,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 144,
                    "end": 156,
                    "id": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 148,
                      "decorators": [],
                      "name": "bVal",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 151,
                      "end": 156,
                      "callee": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 152,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 153,
                          "end": 155,
                          "value": 10,
                          "raw": "10"
                        }
                      ],
                      "optional": false
                    },
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
              "type": "ExportNamedDeclaration",
              "start": 162,
              "end": 183,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 169,
                "end": 183,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 173,
                    "end": 182,
                    "id": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 178,
                      "decorators": [],
                      "name": "bVal2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "definite": false
                  }
                ],
                "declare": false
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
