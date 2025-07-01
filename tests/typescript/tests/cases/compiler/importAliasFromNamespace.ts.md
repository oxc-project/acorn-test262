__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "My",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 12
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Internal",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 21
        },
        "start": 10,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "getThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 52
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 56,
                  "end": 60
                },
                "start": 54,
                "end": 60
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 61,
                "end": 63
              },
              "expression": false,
              "start": 35,
              "end": 63
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 28,
            "end": 63
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "WhichThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 96
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 107,
                      "end": 108
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 107,
                    "end": 108
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 111
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 110,
                    "end": 111
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 114
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 113,
                    "end": 114
                  }
                ],
                "start": 97,
                "end": 120
              },
              "const": true,
              "declare": false,
              "start": 75,
              "end": 120
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 68,
            "end": 120
          }
        ],
        "start": 22,
        "end": 122
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 122
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 74
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 80
        },
        "start": 65,
        "end": 80
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Internal",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 102
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "My",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 107
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Internal",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 116
              },
              "start": 105,
              "end": 116
            },
            "importKind": "value",
            "start": 87,
            "end": 117
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 138
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_which",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 157,
                      "end": 163
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Internal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 173
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "WhichThing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 184
                          },
                          "start": 165,
                          "end": 184
                        },
                        "typeArguments": null,
                        "start": 165,
                        "end": 184
                      },
                      "start": 163,
                      "end": 184
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 149,
                    "end": 185
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 205
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Internal",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 222,
                                  "end": 230
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getThing",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 231,
                                  "end": 239
                                },
                                "optional": false,
                                "computed": false,
                                "start": 222,
                                "end": 239
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 222,
                              "end": 241
                            },
                            "directive": null,
                            "start": 222,
                            "end": 242
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Internal",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 255,
                                    "end": 263
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "WhichThing",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 264,
                                    "end": 274
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 255,
                                  "end": 274
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 275,
                                  "end": 276
                                },
                                "optional": false,
                                "computed": false,
                                "start": 255,
                                "end": 276
                              },
                              "consequent": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "\"foo\"",
                                "start": 279,
                                "end": 284
                              },
                              "alternate": {
                                "type": "Literal",
                                "value": "bar",
                                "raw": "\"bar\"",
                                "start": 287,
                                "end": 292
                              },
                              "start": 255,
                              "end": 292
                            },
                            "directive": null,
                            "start": 255,
                            "end": 293
                          }
                        ],
                        "start": 208,
                        "end": 303
                      },
                      "expression": false,
                      "start": 205,
                      "end": 303
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 194,
                    "end": 303
                  }
                ],
                "start": 139,
                "end": 309
              },
              "abstract": false,
              "declare": false,
              "start": 129,
              "end": 309
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 122,
            "end": 309
          }
        ],
        "start": 81,
        "end": 311
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 55,
      "end": 311
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 55,
  "end": 311
}
```
