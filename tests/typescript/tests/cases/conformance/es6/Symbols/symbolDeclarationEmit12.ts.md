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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 310,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 30,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 27,
              "end": 30,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 35,
            "end": 308,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 42,
              "end": 308,
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
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 50,
                "end": 308,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 60,
                    "end": 81,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 61,
                      "end": 76,
                      "object": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 67,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 76,
                        "decorators": [],
                        "name": "iterator",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 77,
                      "end": 80,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 79,
                        "end": 80,
                        "typeName": {
                          "type": "Identifier",
                          "start": 79,
                          "end": 80,
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "value": null,
                    "computed": true,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 90,
                    "end": 120,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 91,
                      "end": 109,
                      "object": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 97,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 109,
                        "decorators": [],
                        "name": "toPrimitive",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 110,
                      "end": 120,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 114,
                                "end": 115,
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 117,
                        "end": 120,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": true,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 129,
                    "end": 202,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 130,
                      "end": 155,
                      "object": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 136,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 155,
                        "decorators": [],
                        "name": "isConcatSpreadable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 156,
                      "end": 202,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 158,
                        "end": 161,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 160,
                          "end": 161,
                          "typeName": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 161,
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
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
                      "expression": false
                    },
                    "kind": "method",
                    "computed": true,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 211,
                    "end": 259,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 216,
                      "end": 234,
                      "object": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 222,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 234,
                        "decorators": [],
                        "name": "toPrimitive",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 235,
                      "end": 259,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                      "expression": false
                    },
                    "kind": "get",
                    "computed": true,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 268,
                    "end": 302,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 273,
                      "end": 291,
                      "object": {
                        "type": "Identifier",
                        "start": 273,
                        "end": 279,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 280,
                        "end": 291,
                        "decorators": [],
                        "name": "toPrimitive",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 292,
                      "end": 302,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 296,
                                "end": 297,
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 299,
                        "end": 302,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "set",
                    "computed": true,
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
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
