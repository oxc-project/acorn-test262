__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 552,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 107,
      "body": {
        "type": "TSEnumBody",
        "start": 20,
        "end": 107,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 35,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 30,
              "decorators": [],
              "name": "NONE",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 33,
              "end": 35,
              "raw": "\"\"",
              "value": ""
            }
          },
          {
            "type": "TSEnumMember",
            "start": 41,
            "end": 54,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 45,
              "decorators": [],
              "name": "TIME",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 48,
              "end": 54,
              "raw": "\"time\"",
              "value": "time"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 60,
            "end": 77,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 66,
              "decorators": [],
              "name": "SYSTEM",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 69,
              "end": 77,
              "raw": "\"system\"",
              "value": "system"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 83,
            "end": 104,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 91,
              "decorators": [],
              "name": "LOCATION",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 94,
              "end": 104,
              "raw": "\"location\"",
              "value": "location"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 19,
        "decorators": [],
        "name": "AutomationMode",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 109,
      "end": 150,
      "body": {
        "type": "TSInterfaceBody",
        "start": 131,
        "end": 150,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 137,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 139,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 130,
        "decorators": [],
        "name": "ThemePreset",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 152,
      "end": 202,
      "body": {
        "type": "TSInterfaceBody",
        "start": 173,
        "end": 202,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 179,
            "end": 200,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 183,
              "decorators": [],
              "name": "mode",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 185,
                "end": 199,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 199,
                  "decorators": [],
                  "name": "AutomationMode",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 162,
        "end": 172,
        "decorators": [],
        "name": "Automation",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 204,
      "end": 286,
      "body": {
        "type": "TSInterfaceBody",
        "start": 227,
        "end": 286,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 233,
            "end": 256,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 240,
              "decorators": [],
              "name": "presets",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 255,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 242,
                "end": 255,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 242,
                  "end": 253,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 253,
                    "decorators": [],
                    "name": "ThemePreset",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 261,
            "end": 284,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 271,
              "decorators": [],
              "name": "automation",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 283,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 283,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 283,
                  "decorators": [],
                  "name": "Automation",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 214,
        "end": 226,
        "decorators": [],
        "name": "UserSettings",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 288,
      "end": 343,
      "body": {
        "type": "TSInterfaceBody",
        "start": 312,
        "end": 343,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 318,
            "end": 341,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 318,
              "end": 326,
              "decorators": [],
              "name": "settings",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 340,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 328,
                "end": 340,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 340,
                  "decorators": [],
                  "name": "UserSettings",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 298,
        "end": 311,
        "decorators": [],
        "name": "ExtensionData",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 345,
      "end": 551,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 352,
        "end": 551,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 390,
          "end": 551,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 396,
              "end": 549,
              "argument": {
                "type": "ObjectExpression",
                "start": 403,
                "end": 549,
                "properties": [
                  {
                    "type": "Property",
                    "start": 413,
                    "end": 542,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 421,
                      "decorators": [],
                      "name": "settings",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "TSAsExpression",
                      "start": 423,
                      "end": 542,
                      "expression": {
                        "type": "ObjectExpression",
                        "start": 423,
                        "end": 526,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 437,
                            "end": 448,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 437,
                              "end": 444,
                              "decorators": [],
                              "name": "presets",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayExpression",
                              "start": 446,
                              "end": 448,
                              "elements": []
                            }
                          },
                          {
                            "type": "Property",
                            "start": 462,
                            "end": 515,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 462,
                              "end": 472,
                              "decorators": [],
                              "name": "automation",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectExpression",
                              "start": 474,
                              "end": 515,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 492,
                                  "end": 500,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 492,
                                    "end": 496,
                                    "decorators": [],
                                    "name": "mode",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 498,
                                    "end": 500,
                                    "raw": "\"\"",
                                    "value": ""
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 530,
                        "end": 542,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 530,
                          "end": 542,
                          "decorators": [],
                          "name": "UserSettings",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
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
        "id": {
          "type": "Identifier",
          "start": 361,
          "end": 372,
          "decorators": [],
          "name": "getMockData",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 374,
          "end": 389,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 376,
            "end": 389,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 376,
              "end": 389,
              "decorators": [],
              "name": "ExtensionData",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
