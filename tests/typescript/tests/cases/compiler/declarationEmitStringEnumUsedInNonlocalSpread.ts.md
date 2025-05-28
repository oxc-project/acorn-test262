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
          "decorators": [],
          "name": "TestEnum",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "Test1",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "Test2",
                "optional": false,
                "typeAnnotation": null
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
        },
        "const": true,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "ITest",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                  "decorators": [],
                  "name": "TestEnum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 125,
                  "decorators": [],
                  "name": "Test1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                  "decorators": [],
                  "name": "TestEnum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 155,
                  "decorators": [],
                  "name": "Test2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 169,
      "end": 315,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 176,
        "end": 315,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 184,
          "end": 315,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 190,
              "end": 313,
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
              "value": {
                "type": "FunctionExpression",
                "start": 194,
                "end": 313,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
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
                      "decorators": [],
                      "name": "ITest",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
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
                            "kind": "init",
                            "key": {
                              "type": "MemberExpression",
                              "start": 236,
                              "end": 250,
                              "object": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 244,
                                "decorators": [],
                                "name": "TestEnum",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 250,
                                "decorators": [],
                                "name": "Test1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 253,
                              "end": 258,
                              "value": "123",
                              "raw": "'123'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 272,
                            "end": 295,
                            "kind": "init",
                            "key": {
                              "type": "MemberExpression",
                              "start": 273,
                              "end": 287,
                              "object": {
                                "type": "Identifier",
                                "start": 273,
                                "end": 281,
                                "decorators": [],
                                "name": "TestEnum",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 282,
                                "end": 287,
                                "decorators": [],
                                "name": "Test2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 290,
                              "end": 295,
                              "value": "123",
                              "raw": "'123'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
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
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "typeParameters": null,
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
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 55,
          "end": 172,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 61,
              "end": 170,
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
              "value": {
                "type": "FunctionExpression",
                "start": 65,
                "end": 170,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                                  "decorators": [],
                                  "name": "getA",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            }
                          },
                          {
                            "type": "Property",
                            "start": 144,
                            "end": 152,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 145,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 147,
                              "end": 152,
                              "value": "123",
                              "raw": "'123'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
