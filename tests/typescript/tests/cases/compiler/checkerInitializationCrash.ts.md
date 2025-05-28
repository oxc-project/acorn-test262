__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "react",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "value": "react",
        "raw": "'react'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 32,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 46,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 47,
        "end": 128,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 51,
            "end": 126,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 77,
              "decorators": [],
              "name": "FullCalendarVDom",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 78,
              "end": 126,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 84,
                  "end": 122,
                  "declaration": {
                    "type": "TSImportEqualsDeclaration",
                    "start": 91,
                    "end": 122,
                    "id": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 103,
                      "decorators": [],
                      "name": "VNode",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "moduleReference": {
                      "type": "TSQualifiedName",
                      "start": 106,
                      "end": 121,
                      "left": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 111,
                        "decorators": [],
                        "name": "react",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 121,
                        "decorators": [],
                        "name": "ReactNode",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "importKind": "value"
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
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 130,
      "end": 167,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 145,
        "end": 167,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 151,
          "end": 163,
          "decorators": [],
          "name": "FullCalendar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 164,
          "end": 167,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
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
  "end": 155,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 18,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "preact",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 32,
        "value": "preact",
        "raw": "'preact'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 34,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 48,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 49,
        "end": 123,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 53,
            "end": 121,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 79,
              "decorators": [],
              "name": "FullCalendarVDom",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 80,
              "end": 121,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 86,
                  "end": 117,
                  "id": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 96,
                    "decorators": [],
                    "name": "VNode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 99,
                    "end": 116,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 99,
                      "end": 111,
                      "left": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 105,
                        "decorators": [],
                        "name": "preact",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 111,
                        "decorators": [],
                        "name": "VNode",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 111,
                      "end": 116,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 112,
                          "end": 115
                        }
                      ]
                    }
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
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 125,
      "end": 154,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 132,
        "end": 154,
        "id": {
          "type": "Identifier",
          "start": 137,
          "end": 147,
          "decorators": [],
          "name": "EventInput",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 150,
          "end": 153
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
  "end": 160,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 15,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 16,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 41,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 43,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 66,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 67,
        "end": 159,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 73,
            "end": 94,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 87,
              "decorators": [],
              "name": "ReactNode",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 90,
              "end": 93
            },
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 99,
            "end": 157,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 115,
              "decorators": [],
              "name": "useMemo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 115,
              "end": 118,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 116,
                  "end": 117,
                  "name": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 119,
                "end": 135,
                "decorators": [],
                "name": "factory",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 126,
                  "end": 135,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 128,
                    "end": 135,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 131,
                      "end": 135,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 134,
                        "end": 135,
                        "typeName": {
                          "type": "Identifier",
                          "start": 134,
                          "end": 135,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 137,
                "end": 152,
                "decorators": [],
                "name": "deps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 141,
                  "end": 152,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 143,
                    "end": 152
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
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
  "end": 62,
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 26,
        "decorators": [],
        "name": "preact",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 61,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 35,
        "end": 61,
        "id": {
          "type": "Identifier",
          "start": 45,
          "end": 50,
          "decorators": [],
          "name": "VNode",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 50,
          "end": 58,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 51,
              "end": 57,
              "name": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 55,
                "end": 57,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 59,
          "end": 61,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
  "end": 96,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 47,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 19,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 19,
            "decorators": [],
            "name": "FullCalendar",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 46,
        "value": "@fullcalendar/react",
        "raw": "\"@fullcalendar/react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 48,
      "end": 96,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 57,
          "end": 67,
          "imported": {
            "type": "Identifier",
            "start": 57,
            "end": 67,
            "decorators": [],
            "name": "EventInput",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 67,
            "decorators": [],
            "name": "EventInput",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 75,
        "end": 95,
        "value": "@fullcalendar/core",
        "raw": "\"@fullcalendar/core\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
