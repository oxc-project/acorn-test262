__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 480,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSDeclareFunction",
      "start": 33,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 67,
        "name": "OverloadComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 69,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 72,
        "end": 85,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 74,
          "end": 85,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 74,
            "end": 85,
            "left": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 78,
              "end": 85,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 87,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 121,
        "name": "OverloadComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 125,
          "end": 172,
          "name": "attr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 129,
            "end": 172,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 131,
              "end": 172,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 132,
                  "end": 137,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 135,
                      "end": 136,
                      "typeName": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 138,
                  "end": 148,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "name": "a",
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
                },
                {
                  "type": "TSPropertySignature",
                  "start": 149,
                  "end": 171,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 149,
                    "end": 162,
                    "value": "ignore-prop",
                    "raw": "\"ignore-prop\""
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 162,
                    "end": 171,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 164,
                      "end": 171
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 121,
        "end": 124,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 122,
            "end": 123,
            "name": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 173,
        "end": 186,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 175,
          "end": 186,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 175,
            "end": 186,
            "left": {
              "type": "Identifier",
              "start": 175,
              "end": 178,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 179,
              "end": 186,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 188,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 222,
        "name": "OverloadComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 229,
          "end": 247,
          "name": "attr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 233,
            "end": 247,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 235,
              "end": 247,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 236,
                  "end": 241,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 237,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 237,
                    "end": 240,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 239,
                      "end": 240,
                      "typeName": {
                        "type": "Identifier",
                        "start": 239,
                        "end": 240,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 242,
                  "end": 246,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 243,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 243,
                    "end": 246,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 245,
                      "end": 246,
                      "typeName": {
                        "type": "Identifier",
                        "start": 245,
                        "end": 246,
                        "name": "T",
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
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 222,
        "end": 228,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 224,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 226,
            "end": 227,
            "name": {
              "type": "Identifier",
              "start": 226,
              "end": 227,
              "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 248,
        "end": 261,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 250,
          "end": 261,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 250,
            "end": 261,
            "left": {
              "type": "Identifier",
              "start": 250,
              "end": 253,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 254,
              "end": 261,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 273,
      "end": 480,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 285,
        "name": "Baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 343,
          "end": 350,
          "name": "arg1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 347,
            "end": 350,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 349,
              "end": 350,
              "typeName": {
                "type": "Identifier",
                "start": 349,
                "end": 350,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 352,
          "end": 359,
          "name": "arg2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 356,
            "end": 359,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 358,
              "end": 359,
              "typeName": {
                "type": "Identifier",
                "start": 358,
                "end": 359,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 361,
        "end": 480,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 367,
            "end": 407,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 371,
                "end": 407,
                "id": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 373,
                  "name": "a0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 376,
                  "end": 407,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 376,
                    "end": 407,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 395,
                        "end": 405,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 395,
                          "end": 396,
                          "name": "a"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 397,
                          "end": 405,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 398,
                            "end": 404,
                            "object": {
                              "type": "Identifier",
                              "start": 398,
                              "end": 402,
                              "name": "arg1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 403,
                              "end": 404,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 377,
                      "end": 394,
                      "name": "OverloadComponent"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 412,
            "end": 464,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 416,
                "end": 464,
                "id": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 418,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 421,
                  "end": 464,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 421,
                    "end": 464,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 440,
                        "end": 449,
                        "argument": {
                          "type": "Identifier",
                          "start": 444,
                          "end": 448,
                          "name": "arg1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 450,
                        "end": 461,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 450,
                          "end": 461,
                          "name": "ignore-prop"
                        },
                        "value": null
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 422,
                      "end": 439,
                      "name": "OverloadComponent"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 285,
        "end": 342,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 286,
            "end": 307,
            "name": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 296,
              "end": 307,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 297,
                  "end": 306,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 298,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 298,
                    "end": 306,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 300,
                      "end": 306
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 309,
            "end": 341,
            "name": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 319,
              "end": 341,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 320,
                  "end": 331,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 321,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 321,
                    "end": 330,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 323,
                      "end": 330
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 332,
                  "end": 340,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 333,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 333,
                    "end": 340,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 334,
                      "end": 340
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
