__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 26
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Test1",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 38
              },
              "initializer": {
                "type": "Literal",
                "value": "123123",
                "raw": "'123123'",
                "start": 41,
                "end": 49
              },
              "computed": false,
              "start": 33,
              "end": 49
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Test2",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 60
              },
              "initializer": {
                "type": "Literal",
                "value": "12312312312",
                "raw": "'12312312312'",
                "start": 63,
                "end": 76
              },
              "computed": false,
              "start": 55,
              "end": 76
            }
          ],
          "start": 27,
          "end": 79
        },
        "const": true,
        "declare": false,
        "start": 7,
        "end": 79
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 79
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ITest",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 103
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 119
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 125
                },
                "optional": false,
                "computed": false,
                "start": 111,
                "end": 125
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 128,
                  "end": 134
                },
                "start": 126,
                "end": 134
              },
              "accessibility": null,
              "static": false,
              "start": 110,
              "end": 135
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 149
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 155
                },
                "optional": false,
                "computed": false,
                "start": 141,
                "end": 155
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 158,
                  "end": 164
                },
                "start": 156,
                "end": 164
              },
              "accessibility": null,
              "static": false,
              "start": 140,
              "end": 165
            }
          ],
          "start": 104,
          "end": 167
        },
        "declare": false,
        "start": 88,
        "end": 167
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 81,
      "end": 167
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 183
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getA",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 194
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ITest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 203
                    },
                    "typeArguments": null,
                    "start": 198,
                    "end": 203
                  },
                  "start": 196,
                  "end": 203
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TestEnum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 236,
                                "end": 244
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Test1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 245,
                                "end": 250
                              },
                              "optional": false,
                              "computed": false,
                              "start": 236,
                              "end": 250
                            },
                            "value": {
                              "type": "Literal",
                              "value": "123",
                              "raw": "'123'",
                              "start": 253,
                              "end": 258
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 235,
                            "end": 258
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TestEnum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 273,
                                "end": 281
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Test2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 282,
                                "end": 287
                              },
                              "optional": false,
                              "computed": false,
                              "start": 273,
                              "end": 287
                            },
                            "value": {
                              "type": "Literal",
                              "value": "123",
                              "raw": "'123'",
                              "start": 290,
                              "end": 295
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 272,
                            "end": 295
                          }
                        ],
                        "start": 221,
                        "end": 306
                      },
                      "start": 214,
                      "end": 307
                    }
                  ],
                  "start": 204,
                  "end": 313
                },
                "expression": false,
                "start": 194,
                "end": 313
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 190,
              "end": 313
            }
          ],
          "start": 184,
          "end": 315
        },
        "abstract": false,
        "declare": false,
        "start": 176,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 169,
      "end": 315
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 315
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./class",
        "raw": "'./class'",
        "start": 18,
        "end": 27
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 44
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 54
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getA",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 65
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "SpreadElement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 118,
                                  "end": 123
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getA",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 124,
                                  "end": 128
                                },
                                "optional": false,
                                "computed": false,
                                "start": 118,
                                "end": 128
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 118,
                              "end": 130
                            },
                            "start": 115,
                            "end": 130
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 144,
                              "end": 145
                            },
                            "value": {
                              "type": "Literal",
                              "value": "123",
                              "raw": "'123'",
                              "start": 147,
                              "end": 152
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 144,
                            "end": 152
                          }
                        ],
                        "start": 101,
                        "end": 163
                      },
                      "start": 94,
                      "end": 164
                    }
                  ],
                  "start": 68,
                  "end": 170
                },
                "expression": false,
                "start": 65,
                "end": 170
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 61,
              "end": 170
            }
          ],
          "start": 55,
          "end": 172
        },
        "abstract": false,
        "declare": false,
        "start": 37,
        "end": 172
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 172
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
}
```
