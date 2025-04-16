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
              "name": "MsPortal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 16,
              "end": 24,
              "name": "Controls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 25,
            "end": 29,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 30,
          "end": 38,
          "name": "ItemList",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 39,
        "end": 351,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 46,
            "end": 189,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 53,
              "end": 189,
              "id": {
                "type": "Identifier",
                "start": 63,
                "end": 72,
                "name": "Interface",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 72,
                "end": 80,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 73,
                    "end": 79,
                    "name": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 79,
                      "name": "TValue",
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
              "body": {
                "type": "TSInterfaceBody",
                "start": 81,
                "end": 189,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 156,
                    "end": 183,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 163,
                      "name": "options",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 163,
                      "end": 182,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 182,
                        "typeName": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 174,
                          "name": "ViewModel",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 174,
                          "end": 182,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 175,
                              "end": 181,
                              "typeName": {
                                "type": "Identifier",
                                "start": 175,
                                "end": 181,
                                "name": "TValue",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
            "start": 199,
            "end": 274,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 206,
              "end": 274,
              "id": {
                "type": "Identifier",
                "start": 212,
                "end": 221,
                "name": "ItemValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 225,
                "end": 274,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 235,
                    "end": 268,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 246,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 246,
                      "end": 268,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 247,
                          "end": 255,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 252,
                            "end": 255,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 254,
                              "end": 255,
                              "typeName": {
                                "type": "Identifier",
                                "start": 254,
                                "end": 255,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 257,
                        "end": 268,
                        "body": []
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
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 221,
                "end": 224,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 222,
                    "end": 223,
                    "name": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
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
            "start": 285,
            "end": 349,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 292,
              "end": 349,
              "id": {
                "type": "Identifier",
                "start": 298,
                "end": 307,
                "name": "ViewModel",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 324,
                "end": 333,
                "name": "ItemValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 342,
                "end": 349,
                "body": []
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 307,
                "end": 315,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 308,
                    "end": 314,
                    "name": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 314,
                      "name": "TValue",
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 333,
                "end": 341,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 334,
                    "end": 340,
                    "typeName": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 340,
                      "name": "TValue",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
