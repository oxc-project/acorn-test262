declarationEmitExpressionInExtends5.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 238,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 25,
              "end": 46,
              "body": {
                "type": "TSInterfaceBody",
                "start": 42,
                "end": 46,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 40,
                "decorators": [],
                "name": "IFace",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 49,
            "end": 94,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 56,
              "end": 94,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 90,
                "end": 94,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 62,
                "end": 71,
                "decorators": [],
                "name": "SomeClass",
                "optional": false
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 83,
                  "end": 88,
                  "expression": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 88,
                    "decorators": [],
                    "name": "IFace",
                    "optional": false
                  }
                }
              ],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 97,
            "end": 149,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 104,
              "end": 149,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 145,
                "end": 149,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 110,
                "end": 117,
                "decorators": [],
                "name": "Derived",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "CallExpression",
                "start": 126,
                "end": 143,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 134,
                  "decorators": [],
                  "name": "getClass",
                  "optional": false
                },
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
                        "decorators": [],
                        "name": "IFace",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 152,
            "end": 236,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 159,
              "end": 236,
              "async": false,
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
                        "decorators": [],
                        "name": "SomeClass",
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 221,
                        "end": 231,
                        "abstract": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 168,
                "end": 176,
                "decorators": [],
                "name": "getClass",
                "optional": false
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 182,
                "end": 194,
                "typeAnnotation": {
                  "type": "TSConstructorType",
                  "start": 184,
                  "end": 194,
                  "abstract": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 176,
                "end": 179,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 177,
                    "end": 178,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
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
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script"
}
```
