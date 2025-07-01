__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AutomationMode",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 19
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "NONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 30
            },
            "initializer": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 33,
              "end": 35
            },
            "computed": false,
            "start": 26,
            "end": 35
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TIME",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 45
            },
            "initializer": {
              "type": "Literal",
              "value": "time",
              "raw": "\"time\"",
              "start": 48,
              "end": 54
            },
            "computed": false,
            "start": 41,
            "end": 54
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SYSTEM",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 66
            },
            "initializer": {
              "type": "Literal",
              "value": "system",
              "raw": "\"system\"",
              "start": 69,
              "end": 77
            },
            "computed": false,
            "start": 60,
            "end": 77
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "LOCATION",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 91
            },
            "initializer": {
              "type": "Literal",
              "value": "location",
              "raw": "\"location\"",
              "start": 94,
              "end": 104
            },
            "computed": false,
            "start": 83,
            "end": 104
          }
        ],
        "start": 20,
        "end": 107
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 107
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ThemePreset",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 130
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              },
              "start": 139,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 137,
            "end": 148
          }
        ],
        "start": 131,
        "end": 150
      },
      "declare": false,
      "start": 109,
      "end": 150
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Automation",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 172
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mode",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 183
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AutomationMode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 199
                },
                "typeArguments": null,
                "start": 185,
                "end": 199
              },
              "start": 183,
              "end": 199
            },
            "accessibility": null,
            "static": false,
            "start": 179,
            "end": 200
          }
        ],
        "start": 173,
        "end": 202
      },
      "declare": false,
      "start": 152,
      "end": 202
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UserSettings",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 226
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "presets",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThemePreset",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 253
                  },
                  "typeArguments": null,
                  "start": 242,
                  "end": 253
                },
                "start": 242,
                "end": 255
              },
              "start": 240,
              "end": 255
            },
            "accessibility": null,
            "static": false,
            "start": 233,
            "end": 256
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "automation",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 271
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Automation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 283
                },
                "typeArguments": null,
                "start": 273,
                "end": 283
              },
              "start": 271,
              "end": 283
            },
            "accessibility": null,
            "static": false,
            "start": 261,
            "end": 284
          }
        ],
        "start": 227,
        "end": 286
      },
      "declare": false,
      "start": 204,
      "end": 286
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtensionData",
        "optional": false,
        "typeAnnotation": null,
        "start": 298,
        "end": 311
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "settings",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 326
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UserSettings",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 340
                },
                "typeArguments": null,
                "start": 328,
                "end": 340
              },
              "start": 326,
              "end": 340
            },
            "accessibility": null,
            "static": false,
            "start": 318,
            "end": 341
          }
        ],
        "start": 312,
        "end": 343
      },
      "declare": false,
      "start": 288,
      "end": 343
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMockData",
          "optional": false,
          "typeAnnotation": null,
          "start": 361,
          "end": 372
        },
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
              "name": "ExtensionData",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 389
            },
            "typeArguments": null,
            "start": 376,
            "end": 389
          },
          "start": 374,
          "end": 389
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "settings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 413,
                      "end": 421
                    },
                    "value": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "presets",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 437,
                              "end": 444
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 446,
                              "end": 448
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 437,
                            "end": 448
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "automation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 462,
                              "end": 472
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "mode",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 492,
                                    "end": 496
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "\"\"",
                                    "start": 498,
                                    "end": 500
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 492,
                                  "end": 500
                                }
                              ],
                              "start": 474,
                              "end": 515
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 462,
                            "end": 515
                          }
                        ],
                        "start": 423,
                        "end": 526
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "UserSettings",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 530,
                          "end": 542
                        },
                        "typeArguments": null,
                        "start": 530,
                        "end": 542
                      },
                      "start": 423,
                      "end": 542
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 413,
                    "end": 542
                  }
                ],
                "start": 403,
                "end": 549
              },
              "start": 396,
              "end": 549
            }
          ],
          "start": 390,
          "end": 551
        },
        "expression": false,
        "start": 352,
        "end": 551
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 345,
      "end": 551
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 551
}
```
