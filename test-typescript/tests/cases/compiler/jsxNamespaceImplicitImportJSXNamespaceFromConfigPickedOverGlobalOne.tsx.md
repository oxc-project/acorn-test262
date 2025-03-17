__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 433,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 15,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 44,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 67,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 70,
        "body": []
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 72,
      "end": 433,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 86,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 87,
        "end": 433,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 91,
            "end": 431,
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 105,
              "end": 431,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 111,
                  "end": 131,
                  "id": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 128,
                    "name": "Element",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 129,
                    "end": 131,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 136,
                  "end": 161,
                  "id": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 158,
                    "name": "ElementClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 159,
                    "end": 161,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 166,
                  "end": 204,
                  "id": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 201,
                    "name": "ElementAttributesProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 202,
                    "end": 204,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 209,
                  "end": 246,
                  "id": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 243,
                    "name": "ElementChildrenAttribute",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 244,
                    "end": 246,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 251,
                  "end": 291,
                  "id": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 280,
                    "name": "LibraryManagedAttributes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 280,
                    "end": 286,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 281,
                        "end": 282,
                        "name": {
                          "type": "Identifier",
                          "start": 281,
                          "end": 282,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 284,
                        "end": 285,
                        "name": {
                          "type": "Identifier",
                          "start": 284,
                          "end": 285,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 289,
                    "end": 291,
                    "members": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 296,
                  "end": 328,
                  "id": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 325,
                    "name": "IntrinsicAttributes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 326,
                    "end": 328,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 333,
                  "end": 373,
                  "id": {
                    "type": "Identifier",
                    "start": 343,
                    "end": 367,
                    "name": "IntrinsicClassAttributes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 367,
                    "end": 370,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 368,
                        "end": 369,
                        "name": {
                          "type": "Identifier",
                          "start": 368,
                          "end": 369,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 371,
                    "end": 373,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 378,
                  "end": 427,
                  "id": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 405,
                    "name": "IntrinsicElements",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 406,
                    "end": 427,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 414,
                        "end": 421,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 414,
                          "end": 417,
                          "name": "div",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 417,
                          "end": 421,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 419,
                            "end": 421,
                            "members": []
                          }
                        },
                        "accessibility": null,
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
      "kind": "global",
      "declare": true,
      "global": true
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
  "end": 52,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 51,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 26,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "name": "EmotionJSX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "name": "JSX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 51,
        "value": "./jsx-namespace",
        "raw": "'./jsx-namespace'"
      },
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
  "end": 1356,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 14,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 14,
        "value": "react",
        "raw": "'react'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 16,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 43,
        "name": "WithConditionalCSSProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 45,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 49,
        "end": 148,
        "checkType": {
          "type": "TSLiteralType",
          "start": 49,
          "end": 60,
          "literal": {
            "type": "Literal",
            "start": 49,
            "end": 60,
            "value": "className",
            "raw": "'className'"
          }
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "start": 69,
          "end": 76,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 75,
            "end": 76,
            "typeName": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 82,
          "end": 141,
          "checkType": {
            "type": "TSTypeReference",
            "start": 82,
            "end": 83,
            "typeName": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "start": 92,
            "end": 114,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 94,
                "end": 112,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 103,
                  "name": "className",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 104,
                  "end": 112,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 106,
                    "end": 112
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          "trueType": {
            "type": "TSIntersectionType",
            "start": 117,
            "end": 137,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 117,
                "end": 118,
                "typeName": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeLiteral",
                "start": 121,
                "end": 137,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 123,
                    "end": 135,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 126,
                      "name": "css",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 127,
                      "end": 135,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 129,
                        "end": 135
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            ]
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 140,
            "end": 141,
            "typeName": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 147,
          "end": 148,
          "typeName": {
            "type": "Identifier",
            "start": 147,
            "end": 148,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 150,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 170,
        "name": "ReactJSXElement",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 173,
        "end": 184,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 173,
          "end": 184,
          "left": {
            "type": "Identifier",
            "start": 173,
            "end": 176,
            "name": "JSX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 177,
            "end": 184,
            "name": "Element",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 185,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 210,
        "name": "ReactJSXElementClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 213,
        "end": 229,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 213,
          "end": 229,
          "left": {
            "type": "Identifier",
            "start": 213,
            "end": 216,
            "name": "JSX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 217,
            "end": 229,
            "name": "ElementClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 230,
      "end": 300,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 268,
        "name": "ReactJSXElementAttributesProperty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 271,
        "end": 300,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 271,
          "end": 300,
          "left": {
            "type": "Identifier",
            "start": 271,
            "end": 274,
            "name": "JSX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 275,
            "end": 300,
            "name": "ElementAttributesProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 301,
      "end": 369,
      "id": {
        "type": "Identifier",
        "start": 306,
        "end": 338,
        "name": "ReactJSXElementChildrenAttribute",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 341,
        "end": 369,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 341,
          "end": 369,
          "left": {
            "type": "Identifier",
            "start": 341,
            "end": 344,
            "name": "JSX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 345,
            "end": 369,
            "name": "ElementChildrenAttribute",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 370,
      "end": 450,
      "id": {
        "type": "Identifier",
        "start": 375,
        "end": 407,
        "name": "ReactJSXLibraryManagedAttributes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 407,
        "end": 413,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 408,
            "end": 409,
            "name": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 411,
            "end": 412,
            "name": {
              "type": "Identifier",
              "start": 411,
              "end": 412,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 416,
        "end": 450,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 416,
          "end": 444,
          "left": {
            "type": "Identifier",
            "start": 416,
            "end": 419,
            "name": "JSX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 420,
            "end": 444,
            "name": "LibraryManagedAttributes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 444,
          "end": 450,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 445,
              "end": 446,
              "typeName": {
                "type": "Identifier",
                "start": 445,
                "end": 446,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 448,
              "end": 449,
              "typeName": {
                "type": "Identifier",
                "start": 448,
                "end": 449,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 451,
      "end": 509,
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 483,
        "name": "ReactJSXIntrinsicAttributes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 486,
        "end": 509,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 486,
          "end": 509,
          "left": {
            "type": "Identifier",
            "start": 486,
            "end": 489,
            "name": "JSX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 490,
            "end": 509,
            "name": "IntrinsicAttributes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 510,
      "end": 584,
      "id": {
        "type": "Identifier",
        "start": 515,
        "end": 547,
        "name": "ReactJSXIntrinsicClassAttributes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 547,
        "end": 550,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 548,
            "end": 549,
            "name": {
              "type": "Identifier",
              "start": 548,
              "end": 549,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 553,
        "end": 584,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 553,
          "end": 581,
          "left": {
            "type": "Identifier",
            "start": 553,
            "end": 556,
            "name": "JSX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 557,
            "end": 581,
            "name": "IntrinsicClassAttributes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 581,
          "end": 584,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 582,
              "end": 583,
              "typeName": {
                "type": "Identifier",
                "start": 582,
                "end": 583,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 585,
      "end": 639,
      "id": {
        "type": "Identifier",
        "start": 590,
        "end": 615,
        "name": "ReactJSXIntrinsicElements",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 618,
        "end": 639,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 618,
          "end": 639,
          "left": {
            "type": "Identifier",
            "start": 618,
            "end": 621,
            "name": "JSX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 622,
            "end": 639,
            "name": "IntrinsicElements",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 641,
      "end": 1355,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 648,
        "end": 1355,
        "id": {
          "type": "Identifier",
          "start": 658,
          "end": 668,
          "name": "EmotionJSX",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 669,
          "end": 1355,
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "start": 673,
              "end": 717,
              "id": {
                "type": "Identifier",
                "start": 683,
                "end": 690,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 699,
                  "end": 714,
                  "expression": {
                    "type": "Identifier",
                    "start": 699,
                    "end": 714,
                    "name": "ReactJSXElement",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 715,
                "end": 717,
                "body": []
              },
              "declare": false
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 720,
              "end": 774,
              "id": {
                "type": "Identifier",
                "start": 730,
                "end": 742,
                "name": "ElementClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 751,
                  "end": 771,
                  "expression": {
                    "type": "Identifier",
                    "start": 751,
                    "end": 771,
                    "name": "ReactJSXElementClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 772,
                "end": 774,
                "body": []
              },
              "declare": false
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 777,
              "end": 861,
              "id": {
                "type": "Identifier",
                "start": 787,
                "end": 812,
                "name": "ElementAttributesProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 825,
                  "end": 858,
                  "expression": {
                    "type": "Identifier",
                    "start": 825,
                    "end": 858,
                    "name": "ReactJSXElementAttributesProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 859,
                "end": 861,
                "body": []
              },
              "declare": false
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 864,
              "end": 942,
              "id": {
                "type": "Identifier",
                "start": 874,
                "end": 898,
                "name": "ElementChildrenAttribute",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 907,
                  "end": 939,
                  "expression": {
                    "type": "Identifier",
                    "start": 907,
                    "end": 939,
                    "name": "ReactJSXElementChildrenAttribute",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 940,
                "end": 942,
                "body": []
              },
              "declare": false
            },
            {
              "type": "TSTypeAliasDeclaration",
              "start": 946,
              "end": 1054,
              "id": {
                "type": "Identifier",
                "start": 951,
                "end": 975,
                "name": "LibraryManagedAttributes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 975,
                "end": 981,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 976,
                    "end": 977,
                    "name": {
                      "type": "Identifier",
                      "start": 976,
                      "end": 977,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 979,
                    "end": 980,
                    "name": {
                      "type": "Identifier",
                      "start": 979,
                      "end": 980,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 984,
                "end": 1054,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 984,
                    "end": 1009,
                    "typeName": {
                      "type": "Identifier",
                      "start": 984,
                      "end": 1006,
                      "name": "WithConditionalCSSProp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1006,
                      "end": 1009,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1007,
                          "end": 1008,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1007,
                            "end": 1008,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1016,
                    "end": 1054,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1016,
                      "end": 1048,
                      "name": "ReactJSXLibraryManagedAttributes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1048,
                      "end": 1054,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1049,
                          "end": 1050,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1049,
                            "end": 1050,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1052,
                          "end": 1053,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1052,
                            "end": 1053,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 1058,
              "end": 1126,
              "id": {
                "type": "Identifier",
                "start": 1068,
                "end": 1087,
                "name": "IntrinsicAttributes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1096,
                  "end": 1123,
                  "expression": {
                    "type": "Identifier",
                    "start": 1096,
                    "end": 1123,
                    "name": "ReactJSXIntrinsicAttributes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1124,
                "end": 1126,
                "body": []
              },
              "declare": false
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 1129,
              "end": 1217,
              "id": {
                "type": "Identifier",
                "start": 1139,
                "end": 1163,
                "name": "IntrinsicClassAttributes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1179,
                  "end": 1214,
                  "expression": {
                    "type": "Identifier",
                    "start": 1179,
                    "end": 1211,
                    "name": "ReactJSXIntrinsicClassAttributes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1211,
                    "end": 1214,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1212,
                        "end": 1213,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1212,
                          "end": 1213,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1163,
                "end": 1166,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1164,
                    "end": 1165,
                    "name": {
                      "type": "Identifier",
                      "start": 1164,
                      "end": 1165,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "body": {
                "type": "TSInterfaceBody",
                "start": 1215,
                "end": 1217,
                "body": []
              },
              "declare": false
            },
            {
              "type": "TSTypeAliasDeclaration",
              "start": 1221,
              "end": 1353,
              "id": {
                "type": "Identifier",
                "start": 1226,
                "end": 1243,
                "name": "IntrinsicElements",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 1246,
                "end": 1353,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1253,
                  "end": 1289,
                  "name": {
                    "type": "Identifier",
                    "start": 1253,
                    "end": 1254,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 1258,
                    "end": 1289,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1264,
                      "end": 1289,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1264,
                        "end": 1289,
                        "name": "ReactJSXIntrinsicElements",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 1292,
                  "end": 1349,
                  "types": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 1292,
                      "end": 1320,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 1292,
                        "end": 1317,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1292,
                          "end": 1317,
                          "name": "ReactJSXIntrinsicElements",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 1318,
                        "end": 1319,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1318,
                          "end": 1319,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 1323,
                      "end": 1349,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1331,
                          "end": 1343,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1331,
                            "end": 1334,
                            "name": "css",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1335,
                            "end": 1343,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1337,
                              "end": 1343
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 1258,
                  "end": 1289,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1264,
                    "end": 1289,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1264,
                      "end": 1289,
                      "name": "ReactJSXIntrinsicElements",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 1253,
                  "end": 1254,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "declare": false
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
  "end": 61,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 60,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 60,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 59,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "name": "Comp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 20,
              "end": 59,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "JSXElement",
                "start": 26,
                "end": 59,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 26,
                  "end": 53,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 31,
                      "end": 52,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 31,
                        "end": 34,
                        "name": "css"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 35,
                        "end": 52,
                        "value": "color: hotpink;",
                        "raw": "\"color: hotpink;\""
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 27,
                    "end": 30,
                    "name": "div"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                },
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 53,
                  "end": 59,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 55,
                    "end": 58,
                    "name": "div"
                  }
                },
                "children": []
              },
              "typeParameters": null,
              "returnType": null
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
