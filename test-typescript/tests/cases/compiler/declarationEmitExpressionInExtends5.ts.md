__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 239,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 238,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 238,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 46,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 25,
              "end": 46,
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 40,
                "name": "IFace",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 42,
                "end": 46,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 49,
            "end": 94,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 56,
              "end": 94,
              "id": {
                "type": "Identifier",
                "start": 62,
                "end": 71,
                "name": "SomeClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 90,
                "end": 94,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 83,
                  "end": 88,
                  "expression": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 88,
                    "name": "IFace",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
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
            "start": 97,
            "end": 149,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 104,
              "end": 149,
              "id": {
                "type": "Identifier",
                "start": 110,
                "end": 117,
                "name": "Derived",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "CallExpression",
                "start": 126,
                "end": 143,
                "callee": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 134,
                  "name": "getClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 134,
                  "end": 141,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 135,
                      "end": 140,
                      "typeName": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 140,
                        "name": "IFace",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "body": {
                "type": "ClassBody",
                "start": 145,
                "end": 149,
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
            "start": 152,
            "end": 236,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 159,
              "end": 236,
              "id": {
                "type": "Identifier",
                "start": 168,
                "end": 176,
                "name": "getClass",
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
                "start": 196,
                "end": 236,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 200,
                    "end": 233,
                    "argument": {
                      "type": "TSAsExpression",
                      "start": 207,
                      "end": 232,
                      "expression": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 216,
                        "name": "SomeClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 221,
                        "end": 231,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 227,
                          "end": 231,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 230,
                            "end": 231,
                            "typeName": {
                              "type": "Identifier",
                              "start": 230,
                              "end": 231,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 176,
                "end": 179,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 177,
                    "end": 178,
                    "name": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 182,
                "end": 194,
                "typeAnnotation": {
                  "type": "TSConstructorType",
                  "start": 184,
                  "end": 194,
                  "abstract": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 194,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 193,
                      "end": 194,
                      "typeName": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 194,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
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
  "sourceType": "script",
  "hashbang": null
}
```
