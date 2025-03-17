__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 364,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 85,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 12,
        "left": {
          "type": "TSQualifiedName",
          "start": 7,
          "end": 10,
          "left": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 11,
          "end": 12,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 85,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 83,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 26,
              "end": 83,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 37,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 38,
                "end": 83,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 48,
                    "end": 58,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 67,
                    "end": 77,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 70,
                        "end": 76
                      }
                    },
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 87,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 96,
        "end": 197,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 102,
            "end": 195,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 109,
              "end": 195,
              "id": {
                "type": "Identifier",
                "start": 116,
                "end": 117,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 118,
                "end": 195,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 128,
                    "end": 189,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 135,
                      "end": 189,
                      "id": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 142,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 143,
                        "end": 189,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 166,
                            "end": 179,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 166,
                              "end": 170,
                              "name": "name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": null,
                            "decorators": [],
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 170,
                              "end": 178,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 172,
                                "end": 178
                              }
                            },
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
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 199,
      "end": 275,
      "id": {
        "type": "TSQualifiedName",
        "start": 206,
        "end": 210,
        "left": {
          "type": "Identifier",
          "start": 206,
          "end": 208,
          "name": "M2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 209,
          "end": 210,
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 211,
        "end": 275,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 217,
            "end": 273,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 224,
              "end": 273,
              "id": {
                "type": "Identifier",
                "start": 230,
                "end": 235,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 236,
                "end": 273,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 246,
                    "end": 256,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 247,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 247,
                      "end": 255,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 249,
                        "end": 255
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 257,
                    "end": 267,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 258,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 258,
                      "end": 266,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 260,
                        "end": 266
                      }
                    },
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 277,
      "end": 361,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 286,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 287,
        "end": 361,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 293,
            "end": 359,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 300,
              "end": 359,
              "id": {
                "type": "Identifier",
                "start": 307,
                "end": 308,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 309,
                "end": 359,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 319,
                    "end": 344,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 326,
                      "end": 344,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 330,
                          "end": 343,
                          "id": {
                            "type": "Identifier",
                            "start": 330,
                            "end": 343,
                            "name": "Point",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 335,
                              "end": 343,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 337,
                                "end": 343
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
