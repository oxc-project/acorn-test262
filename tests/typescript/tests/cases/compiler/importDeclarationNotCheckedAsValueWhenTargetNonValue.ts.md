__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 470,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 345,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 23,
        "decorators": [],
        "name": "dojox",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 345,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 30,
            "end": 343,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 48,
              "decorators": [],
              "name": "charting",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 49,
              "end": 343,
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "start": 59,
                  "end": 337,
                  "id": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 75,
                    "decorators": [],
                    "name": "axis2d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "start": 76,
                    "end": 337,
                    "body": [
                      {
                        "type": "ExportNamedDeclaration",
                        "start": 90,
                        "end": 110,
                        "declaration": {
                          "type": "ClassDeclaration",
                          "start": 97,
                          "end": 110,
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 106,
                            "decorators": [],
                            "name": "Val",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeParameters": null,
                          "superClass": null,
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "start": 107,
                            "end": 110,
                            "body": []
                          },
                          "abstract": false,
                          "declare": false
                        },
                        "specifiers": [],
                        "source": null,
                        "exportKind": "value",
                        "attributes": []
                      },
                      {
                        "type": "TSInterfaceDeclaration",
                        "start": 123,
                        "end": 191,
                        "id": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 139,
                          "decorators": [],
                          "name": "common",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 140,
                          "end": 191,
                          "body": [
                            {
                              "type": "TSPropertySignature",
                              "start": 158,
                              "end": 177,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 158,
                                "end": 168,
                                "decorators": [],
                                "name": "createText",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 168,
                                "end": 176,
                                "typeAnnotation": {
                                  "type": "TSObjectKeyword",
                                  "start": 170,
                                  "end": 176
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
                        "type": "TSModuleDeclaration",
                        "start": 204,
                        "end": 327,
                        "id": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 220,
                          "decorators": [],
                          "name": "common",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "body": {
                          "type": "TSModuleBlock",
                          "start": 221,
                          "end": 327,
                          "body": [
                            {
                              "type": "TSInterfaceDeclaration",
                              "start": 239,
                              "end": 313,
                              "id": {
                                "type": "Identifier",
                                "start": 249,
                                "end": 259,
                                "decorators": [],
                                "name": "createText",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeParameters": null,
                              "extends": [],
                              "body": {
                                "type": "TSInterfaceBody",
                                "start": 260,
                                "end": 313,
                                "body": [
                                  {
                                    "type": "TSMethodSignature",
                                    "start": 282,
                                    "end": 295,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 282,
                                      "end": 285,
                                      "decorators": [],
                                      "name": "gfx",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "computed": false,
                                    "optional": false,
                                    "kind": "method",
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 287,
                                      "end": 295,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 289,
                                        "end": 295
                                      }
                                    },
                                    "accessibility": null,
                                    "readonly": false,
                                    "static": false
                                  }
                                ]
                              },
                              "declare": false
                            }
                          ]
                        },
                        "kind": "namespace",
                        "declare": false,
                        "global": false
                      }
                    ]
                  },
                  "kind": "namespace",
                  "declare": false,
                  "global": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 346,
      "end": 470,
      "id": {
        "type": "Literal",
        "start": 361,
        "end": 402,
        "value": "dojox/charting/axis2d/common.createText",
        "raw": "\"dojox/charting/axis2d/common.createText\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 403,
        "end": 470,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 409,
            "end": 450,
            "id": {
              "type": "Identifier",
              "start": 416,
              "end": 419,
              "decorators": [],
              "name": "exp",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 422,
              "end": 450,
              "left": {
                "type": "TSQualifiedName",
                "start": 422,
                "end": 443,
                "left": {
                  "type": "TSQualifiedName",
                  "start": 422,
                  "end": 436,
                  "left": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 427,
                    "decorators": [],
                    "name": "dojox",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 428,
                    "end": 436,
                    "decorators": [],
                    "name": "charting",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 443,
                  "decorators": [],
                  "name": "axis2d",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 444,
                "end": 450,
                "decorators": [],
                "name": "common",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSExportAssignment",
            "start": 455,
            "end": 468,
            "expression": {
              "type": "Identifier",
              "start": 464,
              "end": 467,
              "decorators": [],
              "name": "exp",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
