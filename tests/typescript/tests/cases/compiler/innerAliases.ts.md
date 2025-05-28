__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 303,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 111,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 109,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 109,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 31,
                "end": 109,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 41,
                    "end": 103,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 48,
                      "end": 103,
                      "id": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 56,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 57,
                        "end": 103,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 71,
                            "end": 93,
                            "declaration": {
                              "type": "ClassDeclaration",
                              "start": 78,
                              "end": 93,
                              "decorators": [],
                              "id": {
                                "type": "Identifier",
                                "start": 84,
                                "end": 90,
                                "decorators": [],
                                "name": "Class1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeParameters": null,
                              "superClass": null,
                              "superTypeArguments": null,
                              "implements": [],
                              "body": {
                                "type": "ClassBody",
                                "start": 91,
                                "end": 93,
                                "body": []
                              },
                              "abstract": false,
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
    {
      "type": "TSModuleDeclaration",
      "start": 113,
      "end": 251,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 121,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
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
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 159,
            "end": 187,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 163,
                "end": 186,
                "id": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 165,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 168,
                  "end": 186,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 172,
                    "end": 184,
                    "object": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 177,
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 184,
                      "decorators": [],
                      "name": "Class1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 194,
            "end": 249,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 201,
              "end": 249,
              "id": {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 210,
                "end": 249,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 221,
                    "end": 243,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 228,
                      "end": 243,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 240,
                        "decorators": [],
                        "name": "Class2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 241,
                        "end": 243,
                        "body": []
                      },
                      "abstract": false,
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 253,
      "end": 275,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 274,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 267,
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 268,
                    "end": 274,
                    "decorators": [],
                    "name": "Class1",
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 281,
          "end": 301,
          "callee": {
            "type": "MemberExpression",
            "start": 285,
            "end": 299,
            "object": {
              "type": "MemberExpression",
              "start": 285,
              "end": 292,
              "object": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 287,
                "end": 292,
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 293,
              "end": 299,
              "decorators": [],
              "name": "Class1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
