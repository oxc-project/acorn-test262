file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 197,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 196,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 196,
        "body": {
          "type": "TSModuleBlock",
          "start": 18,
          "end": 196,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 24,
              "end": 194,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 31,
                "end": 194,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 47,
                  "end": 194,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 57,
                      "end": 188,
                      "attributes": [],
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 64,
                        "end": 188,
                        "abstract": false,
                        "body": {
                          "type": "ClassBody",
                          "start": 83,
                          "end": 188,
                          "body": [
                            {
                              "type": "MethodDefinition",
                              "start": 97,
                              "end": 178,
                              "accessibility": "public",
                              "computed": false,
                              "decorators": [],
                              "key": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 115,
                                "decorators": [],
                                "name": "getUserName",
                                "optional": false
                              },
                              "kind": "method",
                              "optional": false,
                              "override": false,
                              "static": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 115,
                                "end": 178,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 126,
                                  "end": 178,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 144,
                                      "end": 164,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 151,
                                        "end": 163,
                                        "raw": "\"Bill Gates\"",
                                        "value": "Bill Gates"
                                      }
                                    }
                                  ]
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 117,
                                  "end": 125,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 119,
                                    "end": 125
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 82,
                          "decorators": [],
                          "name": "UserServices",
                          "optional": false
                        },
                        "implements": [],
                        "superClass": null
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
                  "start": 38,
                  "end": 46,
                  "decorators": [],
                  "name": "Services",
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
          "end": 17,
          "decorators": [],
          "name": "App",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
file2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "appJs",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "\"file1\"",
          "value": "file1"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 33,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 48,
        "decorators": [],
        "name": "Services",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 51,
        "end": 69,
        "left": {
          "type": "TSQualifiedName",
          "start": 51,
          "end": 60,
          "left": {
            "type": "Identifier",
            "start": 51,
            "end": 56,
            "decorators": [],
            "name": "appJs",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "decorators": [],
            "name": "App",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 61,
          "end": 69,
          "decorators": [],
          "name": "Services",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 79,
            "end": 120,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 79,
              "end": 118,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 79,
                "end": 106,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 83,
                  "end": 104,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 91,
                    "decorators": [],
                    "name": "Services",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 104,
                    "decorators": [],
                    "name": "UserServices",
                    "optional": false
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 107,
                "end": 118,
                "decorators": [],
                "name": "getUserName",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
