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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "\"react\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 33,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 59,
        "decorators": [],
        "name": "FunctionPropertyNames",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
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
        "type": "TSIndexedAccessType",
        "start": 65,
        "end": 127,
        "objectType": {
          "type": "TSMappedType",
          "start": 65,
          "end": 118,
          "key": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 73,
            "end": 80,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 79,
              "end": 80,
              "typeName": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 83,
            "end": 116,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 83,
              "end": 87,
              "objectType": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 84,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 86,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 96,
              "end": 104,
              "typeName": {
                "type": "Identifier",
                "start": 96,
                "end": 104,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 108,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 111,
              "end": 116
            }
          },
          "optional": false,
          "readonly": null
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 119,
          "end": 126,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 125,
            "end": 126,
            "typeName": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 219,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 219,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 152,
            "end": 167,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
              "value": "",
              "raw": "''"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 172,
            "end": 186,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
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
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 191,
            "end": 217,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 204,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 194,
                "end": 204,
                "typeParameters": null,
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
                }
              }
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 207,
              "end": 216,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 213,
                "end": 216,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 220,
      "end": 295,
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
            "name": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
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
        "start": 243,
        "end": 295,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 249,
            "end": 258,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 249,
              "end": 254,
              "decorators": [],
              "name": "model",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 257,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 256,
                "end": 257,
                "typeName": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 263,
            "end": 293,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 263,
              "end": 266,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 266,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 268,
                "end": 292,
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 289,
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 289,
                  "end": 292,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 290,
                      "end": 291,
                      "typeName": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 291,
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 296,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 309,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 309,
        "end": 312,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 310,
            "end": 311,
            "name": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
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
              "typeName": {
                "type": "Identifier",
                "start": 320,
                "end": 329,
                "decorators": [],
                "name": "TestProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 329,
                "end": 332,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 330,
                    "end": 331,
                    "typeName": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 331,
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
          }
        }
      ],
      "returnType": null,
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
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "start": 343,
                "end": 345
              },
              "children": [],
              "closingFragment": {
                "type": "JSXClosingFragment",
                "start": 345,
                "end": 348
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 352,
      "end": 383,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 382,
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
            "callee": {
              "type": "Identifier",
              "start": 370,
              "end": 380,
              "decorators": [],
              "name": "TestObject",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 385,
      "end": 428,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 427,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 397,
              "end": 427,
              "name": {
                "type": "JSXIdentifier",
                "start": 398,
                "end": 402,
                "name": "Test"
              },
              "typeArguments": null,
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
                    "value": "c",
                    "raw": "\"c\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 429,
      "end": 484,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 483,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 441,
              "end": 483,
              "name": {
                "type": "JSXIdentifier",
                "start": 442,
                "end": 446,
                "name": "Test"
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 446,
                "end": 458,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 447,
                    "end": 457,
                    "typeName": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 457,
                      "decorators": [],
                      "name": "TestObject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
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
                    "value": "c",
                    "raw": "\"c\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
