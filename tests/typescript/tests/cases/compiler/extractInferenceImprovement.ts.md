__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 74,
  "end": 600,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 181,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 157,
        "end": 181,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 163,
            "end": 179,
            "argument": {
              "type": "MemberExpression",
              "start": 170,
              "end": 178,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 170,
                "end": 173,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 174,
                "end": 177,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
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
        "start": 83,
        "end": 95,
        "decorators": [],
        "name": "getProperty2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 118,
          "end": 124,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 121,
            "end": 124,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 123,
              "end": 124,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 126,
          "end": 149,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 129,
            "end": 149,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 131,
              "end": 149,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 138,
                "end": 149,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 139,
                    "end": 140,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 142,
                    "end": 148
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 131,
                "end": 138,
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 150,
        "end": 156,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 152,
          "end": 156,
          "indexType": {
            "type": "TSTypeReference",
            "start": 154,
            "end": 155,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 152,
            "end": 153,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 95,
        "end": 117,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 96,
            "end": 97,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 116,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 109,
              "end": 116,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 116,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "K",
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
      "start": 183,
      "end": 290,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 266,
        "end": 290,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 272,
            "end": 288,
            "argument": {
              "type": "MemberExpression",
              "start": 279,
              "end": 287,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 279,
                "end": 282,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 283,
                "end": 286,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
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
        "start": 192,
        "end": 204,
        "decorators": [],
        "name": "getProperty3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 244,
          "end": 250,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 247,
            "end": 250,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 249,
              "end": 250,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 249,
                "end": 250,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 252,
          "end": 258,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 255,
            "end": 258,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 257,
              "end": 258,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 259,
        "end": 265,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 261,
          "end": 265,
          "indexType": {
            "type": "TSTypeReference",
            "start": 263,
            "end": 264,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 261,
            "end": 262,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 204,
        "end": 243,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 205,
            "end": 206,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 208,
            "end": 242,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 218,
              "end": 242,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 225,
                "end": 242,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 226,
                    "end": 233,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 232,
                      "end": 233,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 233,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 235,
                    "end": 241
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 218,
                "end": 225,
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "decorators": [],
              "name": "K",
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
      "start": 292,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 310,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 299,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 302,
            "end": 310,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 302,
              "end": 308,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 312,
      "end": 388,
      "body": {
        "type": "TSInterfaceBody",
        "start": 329,
        "end": 388,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 335,
            "end": 349,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 335,
              "end": 340,
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 348,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 354,
            "end": 369,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 354,
              "end": 360,
              "decorators": [],
              "name": "second",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 360,
              "end": 368,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 362,
                "end": 368
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 374,
            "end": 386,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 375,
              "end": 376,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 385,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 379,
                "end": 385
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 322,
        "end": 328,
        "decorators": [],
        "name": "StrNum",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 389,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 418,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 406,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 398,
              "end": 406,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 400,
                "end": 406,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 406,
                  "decorators": [],
                  "name": "StrNum",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 409,
            "end": 418,
            "expression": {
              "type": "ObjectExpression",
              "start": 409,
              "end": 411,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 415,
              "end": 418
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 421,
      "end": 438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 425,
          "end": 437,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 425,
            "end": 437,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 429,
              "end": 437,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 431,
                "end": 437
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 455,
      "end": 489,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 455,
        "end": 488,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 455,
          "end": 459,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 462,
          "end": 488,
          "arguments": [
            {
              "type": "Identifier",
              "start": 475,
              "end": 478,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Literal",
              "start": 480,
              "end": 487,
              "raw": "'first'",
              "value": "first"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 462,
            "end": 474,
            "decorators": [],
            "name": "getProperty2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 491,
      "end": 525,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 491,
        "end": 524,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 491,
          "end": 495,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 498,
          "end": 524,
          "arguments": [
            {
              "type": "Identifier",
              "start": 511,
              "end": 514,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Literal",
              "start": 516,
              "end": 523,
              "raw": "'first'",
              "value": "first"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 498,
            "end": 510,
            "decorators": [],
            "name": "getProperty3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 542,
      "end": 570,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 542,
        "end": 569,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 542,
          "end": 546,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 549,
          "end": 569,
          "arguments": [
            {
              "type": "Identifier",
              "start": 562,
              "end": 565,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 567,
              "end": 568,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 549,
            "end": 561,
            "decorators": [],
            "name": "getProperty2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 572,
      "end": 600,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 572,
        "end": 599,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 572,
          "end": 576,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 579,
          "end": 599,
          "arguments": [
            {
              "type": "Identifier",
              "start": 592,
              "end": 595,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 597,
              "end": 598,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 579,
            "end": 591,
            "decorators": [],
            "name": "getProperty3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
