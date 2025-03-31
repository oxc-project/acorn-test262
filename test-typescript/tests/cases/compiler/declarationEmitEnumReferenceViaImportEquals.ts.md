__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 340,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 82,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 82,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 28,
          "name": "Translation",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 29,
          "end": 82,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 33,
              "end": 80,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 33,
                "end": 47,
                "name": "translationKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 47,
                "end": 79,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 49,
                  "end": 79,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 49,
                    "end": 79,
                    "left": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 60,
                      "name": "Translation",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 79,
                      "name": "TranslationKeyEnum",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
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
      "start": 84,
      "end": 338,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 91,
        "end": 338,
        "id": {
          "type": "Identifier",
          "start": 101,
          "end": 112,
          "name": "Translation",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 113,
          "end": 338,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 117,
              "end": 182,
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 124,
                "end": 182,
                "id": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 147,
                  "name": "TranslationKeyEnum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 150,
                  "end": 181,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 150,
                      "end": 164,
                      "literal": {
                        "type": "Literal",
                        "start": 150,
                        "end": 164,
                        "value": "translation1",
                        "raw": "'translation1'"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 167,
                      "end": 181,
                      "literal": {
                        "type": "Literal",
                        "start": 167,
                        "end": 181,
                        "value": "translation2",
                        "raw": "'translation2'"
                      }
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
              "start": 185,
              "end": 336,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 192,
                "end": 336,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 198,
                    "end": 336,
                    "id": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 216,
                      "name": "TranslationKeyEnum",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 219,
                      "end": 336,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 225,
                          "end": 275,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 225,
                            "end": 237,
                            "name": "Translation1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "TSAsExpression",
                            "start": 239,
                            "end": 275,
                            "expression": {
                              "type": "Literal",
                              "start": 239,
                              "end": 253,
                              "value": "translation1",
                              "raw": "'translation1'"
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 257,
                              "end": 275,
                              "typeName": {
                                "type": "Identifier",
                                "start": 257,
                                "end": 275,
                                "name": "TranslationKeyEnum",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 281,
                          "end": 331,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 281,
                            "end": 293,
                            "name": "Translation2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "TSAsExpression",
                            "start": 295,
                            "end": 331,
                            "expression": {
                              "type": "Literal",
                              "start": 295,
                              "end": 309,
                              "value": "translation2",
                              "raw": "'translation2'"
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 313,
                              "end": 331,
                              "typeName": {
                                "type": "Identifier",
                                "start": 313,
                                "end": 331,
                                "name": "TranslationKeyEnum",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
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
  "end": 237,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "Translation",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "Translation",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 43,
        "value": "./translation",
        "raw": "\"./translation\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 45,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 70,
        "name": "TranslationKeyEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 73,
        "end": 103,
        "left": {
          "type": "Identifier",
          "start": 73,
          "end": 84,
          "name": "Translation",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 85,
          "end": 103,
          "name": "TranslationKeyEnum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 106,
      "end": 236,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 113,
        "end": 236,
        "id": {
          "type": "Identifier",
          "start": 119,
          "end": 123,
          "name": "Test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 124,
          "end": 236,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 128,
              "end": 168,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 128,
                "end": 146,
                "name": "TranslationKeyEnum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 149,
                "end": 167,
                "name": "TranslationKeyEnum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 171,
              "end": 234,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 171,
                "end": 176,
                "name": "print",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 176,
                "end": 234,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 179,
                  "end": 234,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 185,
                      "end": 230,
                      "expression": {
                        "type": "CallExpression",
                        "start": 185,
                        "end": 229,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 185,
                          "end": 196,
                          "object": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 192,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 193,
                            "end": 196,
                            "name": "log",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 197,
                            "end": 228,
                            "object": {
                              "type": "Identifier",
                              "start": 197,
                              "end": 215,
                              "name": "TranslationKeyEnum",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 216,
                              "end": 228,
                              "name": "Translation1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "Test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "Test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 29,
        "value": "./test",
        "raw": "\"./test\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 50,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 49,
        "callee": {
          "type": "MemberExpression",
          "start": 31,
          "end": 47,
          "object": {
            "type": "NewExpression",
            "start": 31,
            "end": 41,
            "callee": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "name": "Test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 47,
            "name": "print",
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
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
