__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 310,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 310,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 310,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 30,
            "body": {
              "type": "TSInterfaceBody",
              "start": 27,
              "end": 30,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 35,
            "end": 308,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 42,
              "end": 308,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 50,
                "end": 308,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 60,
                    "end": 81,
                    "accessibility": null,
                    "computed": true,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "MemberExpression",
                      "start": 61,
                      "end": 76,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 67,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 76,
                        "decorators": [],
                        "name": "iterator",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 77,
                      "end": 80,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 79,
                        "end": 80,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 79,
                          "end": 80,
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 90,
                    "end": 120,
                    "accessibility": null,
                    "computed": true,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 91,
                      "end": 109,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 97,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 109,
                        "decorators": [],
                        "name": "toPrimitive",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 110,
                      "end": 120,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 117,
                        "end": 120,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 111,
                          "end": 115,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 112,
                            "end": 115,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 114,
                              "end": 115,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 114,
                                "end": 115,
                                "decorators": [],
                                "name": "I",
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 129,
                    "end": 202,
                    "accessibility": null,
                    "computed": true,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 130,
                      "end": 155,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 136,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 155,
                        "decorators": [],
                        "name": "isConcatSpreadable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 156,
                      "end": 202,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 162,
                        "end": 202,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 176,
                            "end": 192,
                            "argument": {
                              "type": "Identifier",
                              "start": 183,
                              "end": 192,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 158,
                        "end": 161,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 160,
                          "end": 161,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 161,
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 211,
                    "end": 259,
                    "accessibility": null,
                    "computed": true,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 216,
                      "end": 234,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 222,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 234,
                        "decorators": [],
                        "name": "toPrimitive",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 235,
                      "end": 259,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 238,
                        "end": 259,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 240,
                            "end": 257,
                            "argument": {
                              "type": "Identifier",
                              "start": 247,
                              "end": 256,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 268,
                    "end": 302,
                    "accessibility": null,
                    "computed": true,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 273,
                      "end": 291,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 273,
                        "end": 279,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 280,
                        "end": 291,
                        "decorators": [],
                        "name": "toPrimitive",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 292,
                      "end": 302,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 299,
                        "end": 302,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 293,
                          "end": 297,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 294,
                            "end": 297,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 296,
                              "end": 297,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 296,
                                "end": 297,
                                "decorators": [],
                                "name": "I",
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
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
