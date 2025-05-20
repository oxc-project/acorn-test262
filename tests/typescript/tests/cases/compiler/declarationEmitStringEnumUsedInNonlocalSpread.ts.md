__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 315,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 79,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 79,
        "body": {
          "type": "TSEnumBody",
          "start": 27,
          "end": 79,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 33,
              "end": 49,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 38,
                "decorators": [],
                "name": "Test1",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 41,
                "end": 49,
                "raw": "'123123'",
                "value": "123123"
              }
            },
            {
              "type": "TSEnumMember",
              "start": 55,
              "end": 76,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 55,
                "end": 60,
                "decorators": [],
                "name": "Test2",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 63,
                "end": 76,
                "raw": "'12312312312'",
                "value": "12312312312"
              }
            }
          ]
        },
        "const": true,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 26,
          "decorators": [],
          "name": "TestEnum",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 81,
      "end": 167,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 88,
        "end": 167,
        "body": {
          "type": "TSInterfaceBody",
          "start": 104,
          "end": 167,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 110,
              "end": 135,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "start": 111,
                "end": 125,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 119,
                  "decorators": [],
                  "name": "TestEnum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 125,
                  "decorators": [],
                  "name": "Test1",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 126,
                "end": 134,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 128,
                  "end": 134
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 140,
              "end": 165,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "start": 141,
                "end": 155,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 149,
                  "decorators": [],
                  "name": "TestEnum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 155,
                  "decorators": [],
                  "name": "Test2",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 156,
                "end": 164,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 158,
                  "end": 164
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 98,
          "end": 103,
          "decorators": [],
          "name": "ITest",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 169,
      "end": 315,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 176,
        "end": 315,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 184,
          "end": 315,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 190,
              "end": 313,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 190,
                "end": 194,
                "decorators": [],
                "name": "getA",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 194,
                "end": 313,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 204,
                  "end": 313,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 214,
                      "end": 307,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 221,
                        "end": 306,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 235,
                            "end": 258,
                            "computed": true,
                            "key": {
                              "type": "MemberExpression",
                              "start": 236,
                              "end": 250,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 244,
                                "decorators": [],
                                "name": "TestEnum",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 250,
                                "decorators": [],
                                "name": "Test1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 253,
                              "end": 258,
                              "raw": "'123'",
                              "value": "123"
                            }
                          },
                          {
                            "type": "Property",
                            "start": 272,
                            "end": 295,
                            "computed": true,
                            "key": {
                              "type": "MemberExpression",
                              "start": 273,
                              "end": 287,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 273,
                                "end": 281,
                                "decorators": [],
                                "name": "TestEnum",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 282,
                                "end": 287,
                                "decorators": [],
                                "name": "Test2",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 290,
                              "end": 295,
                              "raw": "'123'",
                              "value": "123"
                            }
                          }
                        ]
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
                  "start": 196,
                  "end": 203,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 198,
                    "end": 203,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 203,
                      "decorators": [],
                      "name": "ITest",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 182,
          "end": 183,
          "decorators": [],
          "name": "A",
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "raw": "'./class'",
        "value": "./class"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 172,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 37,
        "end": 172,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 55,
          "end": 172,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 61,
              "end": 170,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 61,
                "end": 65,
                "decorators": [],
                "name": "getA",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 65,
                "end": 170,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 68,
                  "end": 170,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 94,
                      "end": 164,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 101,
                        "end": 163,
                        "properties": [
                          {
                            "type": "SpreadElement",
                            "start": 115,
                            "end": 130,
                            "argument": {
                              "type": "CallExpression",
                              "start": 118,
                              "end": 130,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 118,
                                "end": 128,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 118,
                                  "end": 123
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 124,
                                  "end": 128,
                                  "decorators": [],
                                  "name": "getA",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 144,
                            "end": 152,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 145,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 147,
                              "end": 152,
                              "raw": "'123'",
                              "value": "123"
                            }
                          }
                        ]
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
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 53,
          "end": 54,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
