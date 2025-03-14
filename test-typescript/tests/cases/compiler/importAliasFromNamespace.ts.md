internal.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 122,
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 122,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 28,
            "end": 63,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 35,
              "end": 63,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 63,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 44,
                "end": 52,
                "decorators": [],
                "name": "getThing",
                "optional": false
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 54,
                "end": 60,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 56,
                  "end": 60
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 68,
            "end": 120,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 75,
              "end": 120,
              "body": {
                "type": "TSEnumBody",
                "start": 97,
                "end": 120,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 107,
                    "end": 108,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 108,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 110,
                    "end": 111,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 113,
                    "end": 114,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                ]
              },
              "const": true,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 86,
                "end": 96,
                "decorators": [],
                "name": "WhichThing",
                "optional": false
              }
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
        "type": "TSQualifiedName",
        "start": 10,
        "end": 21,
        "left": {
          "type": "Identifier",
          "start": 10,
          "end": 12,
          "decorators": [],
          "name": "My",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 13,
          "end": 21,
          "decorators": [],
          "name": "Internal",
          "optional": false
        }
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module"
}
```
usage.ts
```json
{
  "type": "Program",
  "start": 55,
  "end": 311,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 55,
      "end": 311,
      "body": {
        "type": "TSModuleBlock",
        "start": 81,
        "end": 311,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 87,
            "end": 117,
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 102,
              "decorators": [],
              "name": "Internal",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 105,
              "end": 116,
              "left": {
                "type": "Identifier",
                "start": 105,
                "end": 107,
                "decorators": [],
                "name": "My",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 108,
                "end": 116,
                "decorators": [],
                "name": "Internal",
                "optional": false
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 122,
            "end": 309,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 129,
              "end": 309,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 139,
                "end": 309,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 149,
                    "end": 185,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 163,
                      "decorators": [],
                      "name": "_which",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 163,
                      "end": 184,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 184,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 165,
                          "end": 184,
                          "left": {
                            "type": "Identifier",
                            "start": 165,
                            "end": 173,
                            "decorators": [],
                            "name": "Internal",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 184,
                            "decorators": [],
                            "name": "WhichThing",
                            "optional": false
                          }
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 194,
                    "end": 303,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 205,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 205,
                      "end": 303,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 208,
                        "end": 303,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 222,
                            "end": 242,
                            "expression": {
                              "type": "CallExpression",
                              "start": 222,
                              "end": 241,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 222,
                                "end": 239,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 222,
                                  "end": 230,
                                  "decorators": [],
                                  "name": "Internal",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 231,
                                  "end": 239,
                                  "decorators": [],
                                  "name": "getThing",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 255,
                            "end": 293,
                            "expression": {
                              "type": "ConditionalExpression",
                              "start": 255,
                              "end": 292,
                              "alternate": {
                                "type": "Literal",
                                "start": 287,
                                "end": 292,
                                "raw": "\"bar\"",
                                "value": "bar"
                              },
                              "consequent": {
                                "type": "Literal",
                                "start": 279,
                                "end": 284,
                                "raw": "\"foo\"",
                                "value": "foo"
                              },
                              "test": {
                                "type": "MemberExpression",
                                "start": 255,
                                "end": 276,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 255,
                                  "end": 274,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 255,
                                    "end": 263,
                                    "decorators": [],
                                    "name": "Internal",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 264,
                                    "end": 274,
                                    "decorators": [],
                                    "name": "WhichThing",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 275,
                                  "end": 276,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 135,
                "end": 138,
                "decorators": [],
                "name": "Foo",
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
        "type": "TSQualifiedName",
        "start": 65,
        "end": 80,
        "left": {
          "type": "Identifier",
          "start": 65,
          "end": 74,
          "decorators": [],
          "name": "SomeOther",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 75,
          "end": 80,
          "decorators": [],
          "name": "Thing",
          "optional": false
        }
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module"
}
```
