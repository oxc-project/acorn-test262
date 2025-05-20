__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 623,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 351,
      "body": {
        "type": "TSModuleBlock",
        "start": 39,
        "end": 351,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 46,
            "end": 189,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 53,
              "end": 189,
              "body": {
                "type": "TSInterfaceBody",
                "start": 81,
                "end": 189,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 156,
                    "end": 183,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 163,
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 163,
                      "end": 182,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 182,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 174,
                          "end": 182,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 175,
                              "end": 181,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 175,
                                "end": 181,
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 174,
                          "decorators": [],
                          "name": "ViewModel",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 63,
                "end": 72,
                "decorators": [],
                "name": "Interface",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 72,
                "end": 80,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 73,
                    "end": 79,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 79,
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 199,
            "end": 274,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 206,
              "end": 274,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 225,
                "end": 274,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 235,
                    "end": 268,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 246,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 246,
                      "end": 268,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 257,
                        "end": 268,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 247,
                          "end": 255,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 252,
                            "end": 255,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 254,
                              "end": 255,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 254,
                                "end": 255,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 212,
                "end": 221,
                "decorators": [],
                "name": "ItemValue",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 221,
                "end": 224,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 222,
                    "end": 223,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 285,
            "end": 349,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 292,
              "end": 349,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 342,
                "end": 349,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 298,
                "end": 307,
                "decorators": [],
                "name": "ViewModel",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 324,
                "end": 333,
                "decorators": [],
                "name": "ItemValue",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 333,
                "end": 341,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 334,
                    "end": 340,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 340,
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 307,
                "end": 315,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 308,
                    "end": 314,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 314,
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null
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
        "type": "TSQualifiedName",
        "start": 7,
        "end": 38,
        "left": {
          "type": "TSQualifiedName",
          "start": 7,
          "end": 29,
          "left": {
            "type": "TSQualifiedName",
            "start": 7,
            "end": 24,
            "left": {
              "type": "Identifier",
              "start": 7,
              "end": 15,
              "decorators": [],
              "name": "MsPortal",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 16,
              "end": 24,
              "decorators": [],
              "name": "Controls",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Identifier",
            "start": 25,
            "end": 29,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 30,
          "end": 38,
          "decorators": [],
          "name": "ItemList",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
