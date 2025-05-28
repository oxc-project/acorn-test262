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
          "decorators": [],
          "name": "Translation",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "translationKey",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Translation",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 79,
                      "decorators": [],
                      "name": "TranslationKeyEnum",
                      "optional": false,
                      "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "Translation",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TranslationKeyEnum",
                  "optional": false,
                  "typeAnnotation": null
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
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 185,
              "end": 336,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 192,
                "end": 336,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 198,
                    "end": 336,
                    "id": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 216,
                      "decorators": [],
                      "name": "TranslationKeyEnum",
                      "optional": false,
                      "typeAnnotation": null
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 225,
                            "end": 237,
                            "decorators": [],
                            "name": "Translation1",
                            "optional": false,
                            "typeAnnotation": null
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
                                "decorators": [],
                                "name": "TranslationKeyEnum",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 281,
                          "end": 331,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 281,
                            "end": 293,
                            "decorators": [],
                            "name": "Translation2",
                            "optional": false,
                            "typeAnnotation": null
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
                                "decorators": [],
                                "name": "TranslationKeyEnum",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
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
            "decorators": [],
            "name": "Translation",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "Translation",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "TranslationKeyEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 73,
        "end": 103,
        "left": {
          "type": "Identifier",
          "start": 73,
          "end": 84,
          "decorators": [],
          "name": "Translation",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 85,
          "end": 103,
          "decorators": [],
          "name": "TranslationKeyEnum",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 119,
          "end": 123,
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 124,
          "end": 236,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 128,
              "end": 168,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 128,
                "end": 146,
                "decorators": [],
                "name": "TranslationKeyEnum",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "start": 149,
                "end": 167,
                "decorators": [],
                "name": "TranslationKeyEnum",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
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
              "start": 171,
              "end": 234,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 171,
                "end": 176,
                "decorators": [],
                "name": "print",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 176,
                "end": 234,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 193,
                            "end": 196,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 197,
                            "end": 228,
                            "object": {
                              "type": "Identifier",
                              "start": 197,
                              "end": 215,
                              "decorators": [],
                              "name": "TranslationKeyEnum",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 216,
                              "end": 228,
                              "decorators": [],
                              "name": "Translation1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
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
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
              "decorators": [],
              "name": "Test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 47,
            "decorators": [],
            "name": "print",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
