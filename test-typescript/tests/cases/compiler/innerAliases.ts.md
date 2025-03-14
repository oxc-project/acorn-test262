innerAliases.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 304,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 111,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 111,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 109,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 109,
              "body": {
                "type": "TSModuleBlock",
                "start": 31,
                "end": 109,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 41,
                    "end": 103,
                    "attributes": [],
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 48,
                      "end": 103,
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 57,
                        "end": 103,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 71,
                            "end": 93,
                            "attributes": [],
                            "declaration": {
                              "type": "ClassDeclaration",
                              "start": 78,
                              "end": 93,
                              "abstract": false,
                              "body": {
                                "type": "ClassBody",
                                "start": 91,
                                "end": 93,
                                "body": []
                              },
                              "declare": false,
                              "decorators": [],
                              "id": {
                                "type": "Identifier",
                                "start": 84,
                                "end": 90,
                                "decorators": [],
                                "name": "Class1",
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
                        "start": 55,
                        "end": 56,
                        "decorators": [],
                        "name": "C",
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
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "B",
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 113,
      "end": 251,
      "body": {
        "type": "TSModuleBlock",
        "start": 122,
        "end": 251,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 128,
            "end": 149,
            "id": {
              "type": "Identifier",
              "start": 135,
              "end": 140,
              "decorators": [],
              "name": "inner",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 143,
              "end": 148,
              "left": {
                "type": "TSQualifiedName",
                "start": 143,
                "end": 146,
                "left": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 159,
            "end": 187,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 163,
                "end": 186,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 165,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 168,
                  "end": 186,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 172,
                    "end": 184,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 177,
                      "decorators": [],
                      "name": "inner",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 184,
                      "decorators": [],
                      "name": "Class1",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 194,
            "end": 249,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 201,
              "end": 249,
              "body": {
                "type": "TSModuleBlock",
                "start": 210,
                "end": 249,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 221,
                    "end": 243,
                    "attributes": [],
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 228,
                      "end": 243,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 241,
                        "end": 243,
                        "body": []
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 240,
                        "decorators": [],
                        "name": "Class2",
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
                "start": 208,
                "end": 209,
                "decorators": [],
                "name": "E",
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
        "start": 120,
        "end": 121,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 253,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 274,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 274,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 274,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 260,
                "end": 274,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 260,
                  "end": 274,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 260,
                    "end": 267,
                    "left": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 261,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 267,
                      "decorators": [],
                      "name": "inner",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 268,
                    "end": 274,
                    "decorators": [],
                    "name": "Class1",
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
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 302,
      "expression": {
        "type": "AssignmentExpression",
        "start": 277,
        "end": 301,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 277,
          "end": 278,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 281,
          "end": 301,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 285,
            "end": 299,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 285,
              "end": 292,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "D",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 287,
                "end": 292,
                "decorators": [],
                "name": "inner",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 293,
              "end": 299,
              "decorators": [],
              "name": "Class1",
              "optional": false
            }
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
