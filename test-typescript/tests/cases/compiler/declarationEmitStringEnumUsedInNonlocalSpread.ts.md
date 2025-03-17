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
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 79,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 26,
          "name": "TestEnum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 33,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 38,
              "name": "Test1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 41,
              "end": 49,
              "value": "123123",
              "raw": "'123123'"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 55,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 60,
              "name": "Test2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 63,
              "end": 76,
              "value": "12312312312",
              "raw": "'12312312312'"
            },
            "computed": false
          }
        ],
        "const": true,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 27,
          "end": 79,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 33,
              "end": 49,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 38,
                "name": "Test1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": {
                "type": "Literal",
                "start": 41,
                "end": 49,
                "value": "123123",
                "raw": "'123123'"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 55,
              "end": 76,
              "id": {
                "type": "Identifier",
                "start": 55,
                "end": 60,
                "name": "Test2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": {
                "type": "Literal",
                "start": 63,
                "end": 76,
                "value": "12312312312",
                "raw": "'12312312312'"
              },
              "computed": false
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 81,
      "end": 167,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 88,
        "end": 167,
        "id": {
          "type": "Identifier",
          "start": 98,
          "end": 103,
          "name": "ITest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 104,
          "end": 167,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 110,
              "end": 135,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "MemberExpression",
                "start": 111,
                "end": 125,
                "object": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 119,
                  "name": "TestEnum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 125,
                  "name": "Test1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 126,
                "end": 134,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 128,
                  "end": 134
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 140,
              "end": 165,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "MemberExpression",
                "start": 141,
                "end": 155,
                "object": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 149,
                  "name": "TestEnum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 155,
                  "name": "Test2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 156,
                "end": 164,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 158,
                  "end": 164
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
      "start": 169,
      "end": 315,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 176,
        "end": 315,
        "id": {
          "type": "Identifier",
          "start": 182,
          "end": 183,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 184,
          "end": 315,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 190,
              "end": 313,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 190,
                "end": 194,
                "name": "getA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 194,
                "end": 313,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "key": {
                              "type": "MemberExpression",
                              "start": 236,
                              "end": 250,
                              "object": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 244,
                                "name": "TestEnum",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 250,
                                "name": "Test1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 253,
                              "end": 258,
                              "value": "123",
                              "raw": "'123'"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 272,
                            "end": 295,
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "key": {
                              "type": "MemberExpression",
                              "start": 273,
                              "end": 287,
                              "object": {
                                "type": "Identifier",
                                "start": 273,
                                "end": 281,
                                "name": "TestEnum",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 282,
                                "end": 287,
                                "name": "Test2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 290,
                              "end": 295,
                              "value": "123",
                              "raw": "'123'"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 196,
                  "end": 203,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 198,
                    "end": 203,
                    "typeName": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 203,
                      "name": "ITest",
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "value": "./class",
        "raw": "'./class'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 172,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 37,
        "end": 172,
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 53,
          "end": 54,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 55,
          "end": 172,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 61,
              "end": 170,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 61,
                "end": 65,
                "name": "getA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 65,
                "end": 170,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 118,
                                "end": 128,
                                "object": {
                                  "type": "Super",
                                  "start": 118,
                                  "end": 123
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 124,
                                  "end": 128,
                                  "name": "getA",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 144,
                            "end": 152,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 145,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 147,
                              "end": 152,
                              "value": "123",
                              "raw": "'123'"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
