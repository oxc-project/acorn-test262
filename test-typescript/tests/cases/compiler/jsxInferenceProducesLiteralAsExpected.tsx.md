__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 484,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
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
          "raw": "\"react\"",
          "value": "react"
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 33,
      "end": 128,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 59,
        "decorators": [],
        "name": "FunctionPropertyNames",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 65,
        "end": 127,
        "indexType": {
          "type": "TSTypeOperator",
          "start": 119,
          "end": 126,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 125,
            "end": 126,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "objectType": {
          "type": "TSMappedType",
          "start": 65,
          "end": 118,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 73,
            "end": 80,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 79,
              "end": 80,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": null,
          "readonly": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 83,
            "end": 116,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 83,
              "end": 87,
              "indexType": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 86,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 84,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 96,
              "end": 104,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 96,
                "end": 104,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 111,
              "end": 116
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 108,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 59,
        "end": 62,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 60,
            "end": 61,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 219,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 219,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 152,
            "end": 167,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 161,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 155,
                "end": 161
              }
            },
            "value": {
              "type": "Literal",
              "start": 164,
              "end": 166,
              "raw": "''",
              "value": ""
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 172,
            "end": 186,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 181,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 175,
                "end": 181
              }
            },
            "value": {
              "type": "Literal",
              "start": 184,
              "end": 185,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 191,
            "end": 217,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 204,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 194,
                "end": 204,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 197,
                  "end": 204,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 200,
                    "end": 204
                  }
                },
                "typeParameters": null
              }
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 207,
              "end": 216,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 213,
                "end": 216,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 145,
        "decorators": [],
        "name": "TestObject",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 220,
      "end": 295,
      "body": {
        "type": "TSInterfaceBody",
        "start": 243,
        "end": 295,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 249,
            "end": 258,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 249,
              "end": 254,
              "decorators": [],
              "name": "model",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 257,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 256,
                "end": 257,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 263,
            "end": 293,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 263,
              "end": 266,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 266,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 268,
                "end": 292,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 289,
                  "end": 292,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 290,
                      "end": 291,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 291,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 289,
                  "decorators": [],
                  "name": "FunctionPropertyNames",
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
        "start": 230,
        "end": 239,
        "decorators": [],
        "name": "TestProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 239,
        "end": 242,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 240,
            "end": 241,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 296,
      "end": 351,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 334,
        "end": 351,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 336,
            "end": 349,
            "argument": {
              "type": "JSXFragment",
              "start": 343,
              "end": 348,
              "children": [],
              "closingFragment": {
                "type": "JSXClosingFragment",
                "start": 345,
                "end": 348
              },
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "start": 343,
                "end": 345
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 309,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 313,
          "end": 332,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 318,
            "end": 332,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 320,
              "end": 332,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 329,
                "end": 332,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 330,
                    "end": 331,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 331,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 320,
                "end": 329,
                "decorators": [],
                "name": "TestProps",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 309,
        "end": 312,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 310,
            "end": 311,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 352,
      "end": 383,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 382,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 363,
            "decorators": [],
            "name": "model",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 366,
            "end": 382,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 370,
              "end": 380,
              "decorators": [],
              "name": "TestObject",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 385,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 427,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 394,
            "decorators": [],
            "name": "el1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 397,
            "end": 427,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 397,
              "end": 427,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 403,
                  "end": 416,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 403,
                    "end": 408,
                    "name": "model"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 409,
                    "end": 416,
                    "expression": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 415,
                      "decorators": [],
                      "name": "model",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 417,
                  "end": 424,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 417,
                    "end": 420,
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 421,
                    "end": 424,
                    "raw": "\"c\"",
                    "value": "c"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 398,
                "end": 402,
                "name": "Test"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 429,
      "end": 484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 483,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 438,
            "decorators": [],
            "name": "el2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 441,
            "end": 483,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 441,
              "end": 483,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 459,
                  "end": 472,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 459,
                    "end": 464,
                    "name": "model"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 465,
                    "end": 472,
                    "expression": {
                      "type": "Identifier",
                      "start": 466,
                      "end": 471,
                      "decorators": [],
                      "name": "model",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 473,
                  "end": 480,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 473,
                    "end": 476,
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 477,
                    "end": 480,
                    "raw": "\"c\"",
                    "value": "c"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 442,
                "end": 446,
                "name": "Test"
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 446,
                "end": 458,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 447,
                    "end": 457,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 457,
                      "decorators": [],
                      "name": "TestObject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
