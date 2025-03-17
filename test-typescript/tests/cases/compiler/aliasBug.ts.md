__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 358,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 41,
                "name": "Provide",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 42,
                "end": 49,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "baz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "id": {
                                "type": "Identifier",
                                "start": 107,
                                "end": 110,
                                "name": "boo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "superClass": null,
                              "body": {
                                "type": "ClassBody",
                                "start": 111,
                                "end": 113,
                                "body": []
                              },
                              "decorators": [],
                              "typeParameters": null,
                              "implements": [],
                              "abstract": false,
                              "declare": false,
                              "superTypeArguments": null
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
      "type": "TSImportEqualsDeclaration",
      "start": 119,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 133,
        "name": "provide",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 136,
        "end": 139,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "booz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 159,
            "end": 162,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 163,
          "end": 166,
          "name": "baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 198,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "provide",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 189,
                "end": 196,
                "name": "Provide",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "use",
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
        "start": 216,
        "end": 357,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 220,
            "end": 244,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 224,
                "end": 243,
                "id": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 243,
                  "name": "p1",
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
                          "name": "provide",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 243,
                          "name": "Provide",
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
          {
            "type": "VariableDeclaration",
            "start": 281,
            "end": 301,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 285,
                "end": 300,
                "id": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 300,
                  "name": "p2",
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
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 293,
                          "end": 300,
                          "name": "Provide",
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
          {
            "type": "VariableDeclaration",
            "start": 304,
            "end": 320,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 308,
                "end": 319,
                "id": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 319,
                  "name": "p3",
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
                          "name": "booz",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 319,
                          "name": "bar",
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
          {
            "type": "VariableDeclaration",
            "start": 323,
            "end": 355,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 327,
                "end": 354,
                "id": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 330,
                  "name": "p22",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "provide",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 352,
                      "name": "Provide",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
