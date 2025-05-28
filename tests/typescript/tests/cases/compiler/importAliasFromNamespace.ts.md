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
          "decorators": [],
          "name": "My",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 13,
          "end": 21,
          "decorators": [],
          "name": "Internal",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "getThing",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              },
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 63,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
                "decorators": [],
                "name": "WhichThing",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              },
              "const": true,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
          "decorators": [],
          "name": "SomeOther",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 75,
          "end": 80,
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "Internal",
              "optional": false,
              "typeAnnotation": null
            },
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 108,
                "end": 116,
                "decorators": [],
                "name": "Internal",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 135,
                "end": 138,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 139,
                "end": 309,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 149,
                    "end": 185,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 163,
                      "decorators": [],
                      "name": "_which",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 184,
                            "decorators": [],
                            "name": "WhichThing",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 194,
                    "end": 303,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 205,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 205,
                      "end": 303,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                                  "decorators": [],
                                  "name": "Internal",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 231,
                                  "end": 239,
                                  "decorators": [],
                                  "name": "getThing",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
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
                                    "decorators": [],
                                    "name": "Internal",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 264,
                                    "end": 274,
                                    "decorators": [],
                                    "name": "WhichThing",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 275,
                                  "end": 276,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
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
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
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
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
