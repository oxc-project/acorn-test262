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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 19,
        "name": "AutomationMode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 26,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 30,
            "name": "NONE",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 33,
            "end": 35,
            "value": "",
            "raw": "\"\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 41,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "name": "TIME",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 48,
            "end": 54,
            "value": "time",
            "raw": "\"time\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 60,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 66,
            "name": "SYSTEM",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 69,
            "end": 77,
            "value": "system",
            "raw": "\"system\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 83,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 91,
            "name": "LOCATION",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 94,
            "end": 104,
            "value": "location",
            "raw": "\"location\""
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 20,
        "end": 107,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 30,
              "name": "NONE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 33,
              "end": 35,
              "value": "",
              "raw": "\"\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 41,
            "end": 54,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 45,
              "name": "TIME",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 48,
              "end": 54,
              "value": "time",
              "raw": "\"time\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 60,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 66,
              "name": "SYSTEM",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 69,
              "end": 77,
              "value": "system",
              "raw": "\"system\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 83,
            "end": 104,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 91,
              "name": "LOCATION",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 94,
              "end": 104,
              "value": "location",
              "raw": "\"location\""
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 109,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 130,
        "name": "ThemePreset",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 131,
        "end": 150,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 137,
            "end": 148,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 139,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 152,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 172,
        "name": "Automation",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 173,
        "end": 202,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 179,
            "end": 200,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 183,
              "name": "mode",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 185,
                "end": 199,
                "typeName": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 199,
                  "name": "AutomationMode",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 204,
      "end": 286,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 226,
        "name": "UserSettings",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 227,
        "end": 286,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 233,
            "end": 256,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 240,
              "name": "presets",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 253,
                    "name": "ThemePreset",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 261,
            "end": 284,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 271,
              "name": "automation",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 283,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 283,
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 283,
                  "name": "Automation",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 288,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 298,
        "end": 311,
        "name": "ExtensionData",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 312,
        "end": 343,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 318,
            "end": 341,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 318,
              "end": 326,
              "name": "settings",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 340,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 328,
                "end": 340,
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 340,
                  "name": "UserSettings",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
    {
      "type": "ExportNamedDeclaration",
      "start": 345,
      "end": 551,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 352,
        "end": 551,
        "id": {
          "type": "Identifier",
          "start": 361,
          "end": 372,
          "name": "getMockData",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 421,
                      "name": "settings",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 437,
                              "end": 444,
                              "name": "presets",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "start": 446,
                              "end": 448,
                              "elements": []
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 462,
                            "end": 515,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 462,
                              "end": 472,
                              "name": "automation",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 474,
                              "end": 515,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 492,
                                  "end": 500,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 492,
                                    "end": 496,
                                    "name": "mode",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 498,
                                    "end": 500,
                                    "value": "",
                                    "raw": "\"\""
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 530,
                        "end": 542,
                        "typeName": {
                          "type": "Identifier",
                          "start": 530,
                          "end": 542,
                          "name": "UserSettings",
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
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 374,
          "end": 389,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 376,
            "end": 389,
            "typeName": {
              "type": "Identifier",
              "start": 376,
              "end": 389,
              "name": "ExtensionData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
