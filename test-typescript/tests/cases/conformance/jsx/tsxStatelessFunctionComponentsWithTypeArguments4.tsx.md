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
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 33,
      "end": 86,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 67,
        "decorators": [],
        "name": "OverloadComponent",
        "optional": false
      },
      "params": [],
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
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 78,
              "end": 85,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 69,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 87,
      "end": 187,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 121,
        "decorators": [],
        "name": "OverloadComponent",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 125,
          "end": 172,
          "decorators": [],
          "name": "attr",
          "optional": false,
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
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 138,
                  "end": 148,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "decorators": [],
                    "name": "a",
                    "optional": false
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
                },
                {
                  "type": "TSPropertySignature",
                  "start": 149,
                  "end": 171,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 149,
                    "end": 162,
                    "raw": "\"ignore-prop\"",
                    "value": "ignore-prop"
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 162,
                    "end": 171,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 164,
                      "end": 171
                    }
                  }
                }
              ]
            }
          }
        }
      ],
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
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 179,
              "end": 186,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 121,
        "end": 124,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 122,
            "end": 123,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 188,
      "end": 262,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 222,
        "decorators": [],
        "name": "OverloadComponent",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 229,
          "end": 247,
          "decorators": [],
          "name": "attr",
          "optional": false,
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
                  "key": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 237,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 242,
                  "end": 246,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 243,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
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
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 254,
              "end": 261,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 222,
        "end": 228,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 224,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 226,
            "end": 227,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 226,
              "end": 227,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 273,
      "end": 480,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 373,
                  "decorators": [],
                  "name": "a0",
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 376,
                  "end": 407,
                  "children": [],
                  "closingElement": null,
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
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 398,
                              "end": 402,
                              "decorators": [],
                              "name": "arg1",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 403,
                              "end": 404,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            }
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
                    "selfClosing": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 418,
                  "decorators": [],
                  "name": "a2",
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 421,
                  "end": 464,
                  "children": [],
                  "closingElement": null,
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
                          "decorators": [],
                          "name": "arg1",
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
                    "selfClosing": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 285,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 343,
          "end": 350,
          "decorators": [],
          "name": "arg1",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 352,
          "end": 359,
          "decorators": [],
          "name": "arg2",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 285,
        "end": 342,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 286,
            "end": 307,
            "const": false,
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
                  "key": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 298,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 298,
                    "end": 306,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 300,
                      "end": 306
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 309,
            "end": 341,
            "const": false,
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
                  "key": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 321,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 321,
                    "end": 330,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 323,
                      "end": 330
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 332,
                  "end": 340,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 333,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 333,
                    "end": 340,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 334,
                      "end": 340
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
