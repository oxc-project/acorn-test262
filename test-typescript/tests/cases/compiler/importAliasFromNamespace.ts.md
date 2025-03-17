__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "TSQualifiedName",
        "start": 10,
        "end": 21,
        "left": {
          "type": "Identifier",
          "start": 10,
          "end": 12,
          "name": "My",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 13,
          "end": 21,
          "name": "Internal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 122,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 28,
            "end": 63,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 35,
              "end": 63,
              "id": {
                "type": "Identifier",
                "start": 44,
                "end": 52,
                "name": "getThing",
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
                "start": 61,
                "end": 63,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 68,
            "end": 120,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 75,
              "end": 120,
              "id": {
                "type": "Identifier",
                "start": 86,
                "end": 96,
                "name": "WhichThing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 107,
                  "end": 108,
                  "id": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 110,
                  "end": 111,
                  "id": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 113,
                  "end": 114,
                  "id": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ],
              "const": true,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 97,
                "end": 120,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 107,
                    "end": 108,
                    "id": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 108,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 110,
                    "end": 111,
                    "id": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 113,
                    "end": 114,
                    "id": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "TSQualifiedName",
        "start": 65,
        "end": 80,
        "left": {
          "type": "Identifier",
          "start": 65,
          "end": 74,
          "name": "SomeOther",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 75,
          "end": 80,
          "name": "Thing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "name": "Internal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 105,
              "end": 116,
              "left": {
                "type": "Identifier",
                "start": 105,
                "end": 107,
                "name": "My",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 108,
                "end": 116,
                "name": "Internal",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 122,
            "end": 309,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 129,
              "end": 309,
              "id": {
                "type": "Identifier",
                "start": 135,
                "end": 138,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 139,
                "end": 309,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 149,
                    "end": 185,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 163,
                      "name": "_which",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
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
                            "name": "Internal",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 184,
                            "name": "WhichThing",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 194,
                    "end": 303,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 205,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 205,
                      "end": 303,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 222,
                                "end": 239,
                                "object": {
                                  "type": "Identifier",
                                  "start": 222,
                                  "end": 230,
                                  "name": "Internal",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 231,
                                  "end": 239,
                                  "name": "getThing",
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
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 255,
                            "end": 293,
                            "expression": {
                              "type": "ConditionalExpression",
                              "start": 255,
                              "end": 292,
                              "test": {
                                "type": "MemberExpression",
                                "start": 255,
                                "end": 276,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 255,
                                  "end": 274,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 255,
                                    "end": 263,
                                    "name": "Internal",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 264,
                                    "end": 274,
                                    "name": "WhichThing",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 275,
                                  "end": 276,
                                  "name": "A",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "consequent": {
                                "type": "Literal",
                                "start": 279,
                                "end": 284,
                                "value": "foo",
                                "raw": "\"foo\""
                              },
                              "alternate": {
                                "type": "Literal",
                                "start": 287,
                                "end": 292,
                                "value": "bar",
                                "raw": "\"bar\""
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
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
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
