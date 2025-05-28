__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 486,
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
      "start": 44,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 67,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 71,
        "body": []
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 73,
      "end": 486,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 87,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 88,
        "end": 486,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 94,
            "end": 484,
            "id": {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 108,
              "end": 484,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 118,
                  "end": 139,
                  "id": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 135,
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 136,
                    "end": 139,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 148,
                  "end": 174,
                  "id": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 170,
                    "decorators": [],
                    "name": "ElementClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 171,
                    "end": 174,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 183,
                  "end": 222,
                  "id": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 218,
                    "decorators": [],
                    "name": "ElementAttributesProperty",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 219,
                    "end": 222,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 231,
                  "end": 269,
                  "id": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 265,
                    "decorators": [],
                    "name": "ElementChildrenAttribute",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 266,
                    "end": 269,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 278,
                  "end": 318,
                  "id": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 307,
                    "decorators": [],
                    "name": "LibraryManagedAttributes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 307,
                    "end": 313,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 308,
                        "end": 309,
                        "name": {
                          "type": "Identifier",
                          "start": 308,
                          "end": 309,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 311,
                        "end": 312,
                        "name": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 312,
                          "decorators": [],
                          "name": "P",
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
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 316,
                    "end": 318,
                    "members": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 327,
                  "end": 360,
                  "id": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 356,
                    "decorators": [],
                    "name": "IntrinsicAttributes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 357,
                    "end": 360,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 369,
                  "end": 410,
                  "id": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 403,
                    "decorators": [],
                    "name": "IntrinsicClassAttributes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 403,
                    "end": 406,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 404,
                        "end": 405,
                        "name": {
                          "type": "Identifier",
                          "start": 404,
                          "end": 405,
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
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 407,
                    "end": 410,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 419,
                  "end": 478,
                  "id": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 446,
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 447,
                    "end": 478,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 461,
                        "end": 468,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 461,
                          "end": 464,
                          "decorators": [],
                          "name": "div",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 464,
                          "end": 468,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 466,
                            "end": 468,
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
            "decorators": [],
            "name": "EmotionJSX",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
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
  "end": 1410,
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 16,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 43,
        "decorators": [],
        "name": "WithConditionalCSSProp",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "P",
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 49,
        "end": 152,
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
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 84,
          "end": 143,
          "checkType": {
            "type": "TSTypeReference",
            "start": 84,
            "end": 85,
            "typeName": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "start": 94,
            "end": 116,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 96,
                "end": 114,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 105,
                  "decorators": [],
                  "name": "className",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 106,
                  "end": 114,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 108,
                    "end": 114
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          "trueType": {
            "type": "TSIntersectionType",
            "start": 119,
            "end": 139,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 119,
                "end": 120,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeLiteral",
                "start": 123,
                "end": 139,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 125,
                    "end": 137,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 128,
                      "decorators": [],
                      "name": "css",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 129,
                      "end": 137,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 131,
                        "end": 137
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
            "start": 142,
            "end": 143,
            "typeName": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 151,
          "end": 152,
          "typeName": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 154,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 174,
        "decorators": [],
        "name": "ReactJSXElement",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 177,
        "end": 188,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 177,
          "end": 188,
          "left": {
            "type": "Identifier",
            "start": 177,
            "end": 180,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 181,
            "end": 188,
            "decorators": [],
            "name": "Element",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 189,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 214,
        "decorators": [],
        "name": "ReactJSXElementClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 217,
        "end": 233,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 217,
          "end": 233,
          "left": {
            "type": "Identifier",
            "start": 217,
            "end": 220,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 221,
            "end": 233,
            "decorators": [],
            "name": "ElementClass",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 234,
      "end": 304,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 272,
        "decorators": [],
        "name": "ReactJSXElementAttributesProperty",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 275,
        "end": 304,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 275,
          "end": 304,
          "left": {
            "type": "Identifier",
            "start": 275,
            "end": 278,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 279,
            "end": 304,
            "decorators": [],
            "name": "ElementAttributesProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 305,
      "end": 373,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 342,
        "decorators": [],
        "name": "ReactJSXElementChildrenAttribute",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 345,
        "end": 373,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 345,
          "end": 373,
          "left": {
            "type": "Identifier",
            "start": 345,
            "end": 348,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 349,
            "end": 373,
            "decorators": [],
            "name": "ElementChildrenAttribute",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 374,
      "end": 454,
      "id": {
        "type": "Identifier",
        "start": 379,
        "end": 411,
        "decorators": [],
        "name": "ReactJSXLibraryManagedAttributes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 411,
        "end": 417,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 412,
            "end": 413,
            "name": {
              "type": "Identifier",
              "start": 412,
              "end": 413,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 415,
            "end": 416,
            "name": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "decorators": [],
              "name": "P",
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 420,
        "end": 454,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 420,
          "end": 448,
          "left": {
            "type": "Identifier",
            "start": 420,
            "end": 423,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 424,
            "end": 448,
            "decorators": [],
            "name": "LibraryManagedAttributes",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 448,
          "end": 454,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 449,
              "end": 450,
              "typeName": {
                "type": "Identifier",
                "start": 449,
                "end": 450,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 452,
              "end": 453,
              "typeName": {
                "type": "Identifier",
                "start": 452,
                "end": 453,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
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
      "start": 455,
      "end": 513,
      "id": {
        "type": "Identifier",
        "start": 460,
        "end": 487,
        "decorators": [],
        "name": "ReactJSXIntrinsicAttributes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 490,
        "end": 513,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 490,
          "end": 513,
          "left": {
            "type": "Identifier",
            "start": 490,
            "end": 493,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 494,
            "end": 513,
            "decorators": [],
            "name": "IntrinsicAttributes",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 514,
      "end": 588,
      "id": {
        "type": "Identifier",
        "start": 519,
        "end": 551,
        "decorators": [],
        "name": "ReactJSXIntrinsicClassAttributes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 551,
        "end": 554,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 552,
            "end": 553,
            "name": {
              "type": "Identifier",
              "start": 552,
              "end": 553,
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 557,
        "end": 588,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 557,
          "end": 585,
          "left": {
            "type": "Identifier",
            "start": 557,
            "end": 560,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 561,
            "end": 585,
            "decorators": [],
            "name": "IntrinsicClassAttributes",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 585,
          "end": 588,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 586,
              "end": 587,
              "typeName": {
                "type": "Identifier",
                "start": 586,
                "end": 587,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
      "start": 589,
      "end": 643,
      "id": {
        "type": "Identifier",
        "start": 594,
        "end": 619,
        "decorators": [],
        "name": "ReactJSXIntrinsicElements",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 622,
        "end": 643,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 622,
          "end": 643,
          "left": {
            "type": "Identifier",
            "start": 622,
            "end": 625,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 626,
            "end": 643,
            "decorators": [],
            "name": "IntrinsicElements",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 645,
      "end": 1409,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 652,
        "end": 1409,
        "id": {
          "type": "Identifier",
          "start": 662,
          "end": 672,
          "decorators": [],
          "name": "EmotionJSX",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 673,
          "end": 1409,
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "start": 679,
              "end": 724,
              "id": {
                "type": "Identifier",
                "start": 689,
                "end": 696,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 705,
                  "end": 720,
                  "expression": {
                    "type": "Identifier",
                    "start": 705,
                    "end": 720,
                    "decorators": [],
                    "name": "ReactJSXElement",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "start": 721,
                "end": 724,
                "body": []
              },
              "declare": false
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 729,
              "end": 784,
              "id": {
                "type": "Identifier",
                "start": 739,
                "end": 751,
                "decorators": [],
                "name": "ElementClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 760,
                  "end": 780,
                  "expression": {
                    "type": "Identifier",
                    "start": 760,
                    "end": 780,
                    "decorators": [],
                    "name": "ReactJSXElementClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "start": 781,
                "end": 784,
                "body": []
              },
              "declare": false
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 789,
              "end": 878,
              "id": {
                "type": "Identifier",
                "start": 799,
                "end": 824,
                "decorators": [],
                "name": "ElementAttributesProperty",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 841,
                  "end": 874,
                  "expression": {
                    "type": "Identifier",
                    "start": 841,
                    "end": 874,
                    "decorators": [],
                    "name": "ReactJSXElementAttributesProperty",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "start": 875,
                "end": 878,
                "body": []
              },
              "declare": false
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 883,
              "end": 962,
              "id": {
                "type": "Identifier",
                "start": 893,
                "end": 917,
                "decorators": [],
                "name": "ElementChildrenAttribute",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 926,
                  "end": 958,
                  "expression": {
                    "type": "Identifier",
                    "start": 926,
                    "end": 958,
                    "decorators": [],
                    "name": "ReactJSXElementChildrenAttribute",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "start": 959,
                "end": 962,
                "body": []
              },
              "declare": false
            },
            {
              "type": "TSTypeAliasDeclaration",
              "start": 968,
              "end": 1080,
              "id": {
                "type": "Identifier",
                "start": 973,
                "end": 997,
                "decorators": [],
                "name": "LibraryManagedAttributes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 997,
                "end": 1003,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 998,
                    "end": 999,
                    "name": {
                      "type": "Identifier",
                      "start": 998,
                      "end": 999,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 1001,
                    "end": 1002,
                    "name": {
                      "type": "Identifier",
                      "start": 1001,
                      "end": 1002,
                      "decorators": [],
                      "name": "P",
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
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1006,
                "end": 1080,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1006,
                    "end": 1031,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1006,
                      "end": 1028,
                      "decorators": [],
                      "name": "WithConditionalCSSProp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1028,
                      "end": 1031,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1029,
                          "end": 1030,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1029,
                            "end": 1030,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1042,
                    "end": 1080,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1042,
                      "end": 1074,
                      "decorators": [],
                      "name": "ReactJSXLibraryManagedAttributes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1074,
                      "end": 1080,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1075,
                          "end": 1076,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1075,
                            "end": 1076,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1078,
                          "end": 1079,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1078,
                            "end": 1079,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
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
              "start": 1086,
              "end": 1155,
              "id": {
                "type": "Identifier",
                "start": 1096,
                "end": 1115,
                "decorators": [],
                "name": "IntrinsicAttributes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1124,
                  "end": 1151,
                  "expression": {
                    "type": "Identifier",
                    "start": 1124,
                    "end": 1151,
                    "decorators": [],
                    "name": "ReactJSXIntrinsicAttributes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "start": 1152,
                "end": 1155,
                "body": []
              },
              "declare": false
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 1160,
              "end": 1253,
              "id": {
                "type": "Identifier",
                "start": 1170,
                "end": 1194,
                "decorators": [],
                "name": "IntrinsicClassAttributes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1194,
                "end": 1197,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1195,
                    "end": 1196,
                    "name": {
                      "type": "Identifier",
                      "start": 1195,
                      "end": 1196,
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
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1214,
                  "end": 1249,
                  "expression": {
                    "type": "Identifier",
                    "start": 1214,
                    "end": 1246,
                    "decorators": [],
                    "name": "ReactJSXIntrinsicClassAttributes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1246,
                    "end": 1249,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1247,
                        "end": 1248,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1247,
                          "end": 1248,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "start": 1250,
                "end": 1253,
                "body": []
              },
              "declare": false
            },
            {
              "type": "TSTypeAliasDeclaration",
              "start": 1259,
              "end": 1407,
              "id": {
                "type": "Identifier",
                "start": 1264,
                "end": 1281,
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 1284,
                "end": 1407,
                "key": {
                  "type": "Identifier",
                  "start": 1295,
                  "end": 1296,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 1300,
                  "end": 1331,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1306,
                    "end": 1331,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1306,
                      "end": 1331,
                      "decorators": [],
                      "name": "ReactJSXIntrinsicElements",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 1334,
                  "end": 1401,
                  "types": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 1334,
                      "end": 1362,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 1334,
                        "end": 1359,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1334,
                          "end": 1359,
                          "decorators": [],
                          "name": "ReactJSXIntrinsicElements",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 1360,
                        "end": 1361,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1360,
                          "end": 1361,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 1365,
                      "end": 1401,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1379,
                          "end": 1391,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1379,
                            "end": 1382,
                            "decorators": [],
                            "name": "css",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1383,
                            "end": 1391,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1385,
                              "end": 1391
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                },
                "optional": false,
                "readonly": null
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
  "start": 38,
  "end": 98,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 98,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 45,
        "end": 98,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 51,
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 55,
              "decorators": [],
              "name": "Comp",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 58,
              "end": 97,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "start": 64,
                "end": 97,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 64,
                  "end": 91,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 65,
                    "end": 68,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 69,
                      "end": 90,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 69,
                        "end": 72,
                        "name": "css"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 73,
                        "end": 90,
                        "value": "color: hotpink;",
                        "raw": "\"color: hotpink;\""
                      }
                    }
                  ],
                  "selfClosing": false
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 91,
                  "end": 97,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 93,
                    "end": 96,
                    "name": "div"
                  }
                }
              },
              "id": null,
              "generator": false
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
