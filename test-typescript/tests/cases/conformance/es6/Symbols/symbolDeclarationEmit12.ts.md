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
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
              "id": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 50,
                "end": 308,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 60,
                    "end": 81,
                    "static": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 61,
                      "end": 76,
                      "object": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 67,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 76,
                        "name": "iterator",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
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
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 90,
                    "end": 120,
                    "static": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 91,
                      "end": 109,
                      "object": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 97,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 109,
                        "name": "toPrimitive",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 110,
                      "end": 120,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 111,
                          "end": 115,
                          "name": "x",
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
                                "name": "I",
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
                        "start": 117,
                        "end": 120,
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 129,
                    "end": 202,
                    "static": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 130,
                      "end": 155,
                      "object": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 136,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 155,
                        "name": "isConcatSpreadable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 156,
                      "end": 202,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "name": "undefined",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
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
                            "name": "I",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 211,
                    "end": 259,
                    "static": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 216,
                      "end": 234,
                      "object": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 222,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 234,
                        "name": "toPrimitive",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 235,
                      "end": 259,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "name": "undefined",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 268,
                    "end": 302,
                    "static": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 273,
                      "end": 291,
                      "object": {
                        "type": "Identifier",
                        "start": 273,
                        "end": 279,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 280,
                        "end": 291,
                        "name": "toPrimitive",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 292,
                      "end": 302,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 293,
                          "end": 297,
                          "name": "x",
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
                                "name": "I",
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
                        "start": 299,
                        "end": 302,
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
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
