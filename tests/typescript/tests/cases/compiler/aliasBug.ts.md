__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 357,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 117,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 49,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 28,
              "end": 49,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 41,
                "decorators": [],
                "name": "Provide",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 42,
                "end": 49,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 55,
            "end": 115,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 62,
              "end": 115,
              "id": {
                "type": "Identifier",
                "start": 69,
                "end": 72,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 73,
                "end": 115,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 75,
                    "end": 114,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 82,
                      "end": 114,
                      "id": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 92,
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 93,
                        "end": 114,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 94,
                            "end": 113,
                            "declaration": {
                              "type": "ClassDeclaration",
                              "start": 101,
                              "end": 113,
                              "decorators": [],
                              "id": {
                                "type": "Identifier",
                                "start": 107,
                                "end": 110,
                                "decorators": [],
                                "name": "boo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeParameters": null,
                              "superClass": null,
                              "superTypeArguments": null,
                              "implements": [],
                              "body": {
                                "type": "ClassBody",
                                "start": 111,
                                "end": 113,
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
      "type": "TSImportEqualsDeclaration",
      "start": 119,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 133,
        "decorators": [],
        "name": "provide",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 136,
        "end": 139,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 141,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 152,
        "decorators": [],
        "name": "booz",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 155,
        "end": 166,
        "left": {
          "type": "TSQualifiedName",
          "start": 155,
          "end": 162,
          "left": {
            "type": "Identifier",
            "start": 155,
            "end": 158,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 159,
            "end": 162,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 163,
          "end": 166,
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 199,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 198,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 177,
            "end": 198,
            "callee": {
              "type": "MemberExpression",
              "start": 181,
              "end": 196,
              "object": {
                "type": "Identifier",
                "start": 181,
                "end": 188,
                "decorators": [],
                "name": "provide",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 189,
                "end": 196,
                "decorators": [],
                "name": "Provide",
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
      "type": "FunctionDeclaration",
      "start": 201,
      "end": 357,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 213,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 216,
        "end": 357,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 220,
            "end": 244,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 224,
                "end": 243,
                "id": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 243,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 226,
                    "end": 243,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 228,
                      "end": 243,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 228,
                        "end": 243,
                        "left": {
                          "type": "Identifier",
                          "start": 228,
                          "end": 235,
                          "decorators": [],
                          "name": "provide",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 243,
                          "decorators": [],
                          "name": "Provide",
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
            "type": "VariableDeclaration",
            "start": 281,
            "end": 301,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 285,
                "end": 300,
                "id": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 300,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 287,
                    "end": 300,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 289,
                      "end": 300,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 289,
                        "end": 300,
                        "left": {
                          "type": "Identifier",
                          "start": 289,
                          "end": 292,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 293,
                          "end": 300,
                          "decorators": [],
                          "name": "Provide",
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
            "type": "VariableDeclaration",
            "start": 304,
            "end": 320,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 308,
                "end": 319,
                "id": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 319,
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 310,
                    "end": 319,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 311,
                      "end": 319,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 311,
                        "end": 319,
                        "left": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 315,
                          "decorators": [],
                          "name": "booz",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 319,
                          "decorators": [],
                          "name": "bar",
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
            "type": "VariableDeclaration",
            "start": 323,
            "end": 355,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 327,
                "end": 354,
                "id": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 330,
                  "decorators": [],
                  "name": "p22",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 333,
                  "end": 354,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 337,
                    "end": 352,
                    "object": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 344,
                      "decorators": [],
                      "name": "provide",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 352,
                      "decorators": [],
                      "name": "Provide",
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
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
