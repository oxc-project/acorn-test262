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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 82,
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
              "key": {
                "type": "Identifier",
                "start": 33,
                "end": 47,
                "decorators": [],
                "name": "translationKey",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 79,
                      "decorators": [],
                      "name": "TranslationKeyEnum",
                      "optional": false
                    }
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 28,
          "decorators": [],
          "name": "Translation",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 338,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 91,
        "end": 338,
        "body": {
          "type": "TSModuleBlock",
          "start": 113,
          "end": 338,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 117,
              "end": 182,
              "attributes": [],
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 124,
                "end": 182,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 147,
                  "decorators": [],
                  "name": "TranslationKeyEnum",
                  "optional": false
                },
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
                        "raw": "'translation1'",
                        "value": "translation1"
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
                        "raw": "'translation2'",
                        "value": "translation2"
                      }
                    }
                  ]
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 185,
              "end": 336,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 192,
                "end": 336,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 198,
                    "end": 336,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 216,
                      "decorators": [],
                      "name": "TranslationKeyEnum",
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 225,
                            "end": 237,
                            "decorators": [],
                            "name": "Translation1",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "TSAsExpression",
                            "start": 239,
                            "end": 275,
                            "expression": {
                              "type": "Literal",
                              "start": 239,
                              "end": 253,
                              "raw": "'translation1'",
                              "value": "translation1"
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
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "start": 281,
                          "end": 331,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 281,
                            "end": 293,
                            "decorators": [],
                            "name": "Translation2",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "TSAsExpression",
                            "start": 295,
                            "end": 331,
                            "expression": {
                              "type": "Literal",
                              "start": 295,
                              "end": 309,
                              "raw": "'translation2'",
                              "value": "translation2"
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
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
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
          "start": 101,
          "end": 112,
          "decorators": [],
          "name": "Translation",
          "optional": false
        },
        "kind": "namespace"
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
  "end": 237,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 43,
        "raw": "\"./translation\"",
        "value": "./translation"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "Translation",
            "optional": false
          }
        }
      ]
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
        "optional": false
      },
      "importKind": "value",
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
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 85,
          "end": 103,
          "decorators": [],
          "name": "TranslationKeyEnum",
          "optional": false
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 106,
      "end": 236,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 113,
        "end": 236,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 124,
          "end": 236,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 128,
              "end": 168,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 128,
                "end": 146,
                "decorators": [],
                "name": "TranslationKeyEnum",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Identifier",
                "start": 149,
                "end": 167,
                "decorators": [],
                "name": "TranslationKeyEnum",
                "optional": false
              }
            },
            {
              "type": "MethodDefinition",
              "start": 171,
              "end": 234,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 171,
                "end": 176,
                "decorators": [],
                "name": "print",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 176,
                "end": 234,
                "async": false,
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
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 197,
                            "end": 228,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 197,
                              "end": 215,
                              "decorators": [],
                              "name": "TranslationKeyEnum",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 216,
                              "end": 228,
                              "decorators": [],
                              "name": "Translation1",
                              "optional": false
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 185,
                          "end": 196,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 192,
                            "decorators": [],
                            "name": "console",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 193,
                            "end": 196,
                            "decorators": [],
                            "name": "log",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 119,
          "end": 123,
          "decorators": [],
          "name": "Test",
          "optional": false
        },
        "implements": [],
        "superClass": null
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
  "end": 50,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 29,
        "raw": "\"./test\"",
        "value": "./test"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Test",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 50,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 49,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 31,
          "end": 47,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 31,
            "end": 41,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "Test",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 47,
            "decorators": [],
            "name": "print",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
