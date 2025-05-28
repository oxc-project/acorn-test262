__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 55,
  "end": 550,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 71,
        "decorators": [],
        "name": "Number",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 109,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 90,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 95,
            "end": 107,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 98,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 106,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 100,
                "end": 106
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
      "type": "TSInterfaceDeclaration",
      "start": 111,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 127,
        "decorators": [],
        "name": "String",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 128,
        "end": 169,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 134,
            "end": 148,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 137,
              "decorators": [],
              "name": "foo",
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
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 153,
            "end": 167,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "decorators": [],
              "name": "foo",
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
              "start": 158,
              "end": 166,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 160,
                "end": 166
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 171,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 181,
        "end": 186,
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 186,
        "end": 189,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 187,
            "end": 188,
            "name": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
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
        "start": 190,
        "end": 217,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 196,
            "end": 203,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 199,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 202,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
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
            "start": 208,
            "end": 215,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 208,
              "end": 211,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 214,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 213,
                "end": 214,
                "typeName": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 214,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 219,
      "end": 336,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 226,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 227,
        "end": 336,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 233,
            "end": 245,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 236,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 244,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 238,
                "end": 244
              }
            },
            "value": null,
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
            "start": 250,
            "end": 262,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 250,
              "end": 253,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 253,
              "end": 261,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 255,
                "end": 261
              }
            },
            "value": null,
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
            "type": "MethodDefinition",
            "start": 268,
            "end": 278,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 271,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 271,
              "end": 278,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 275,
                "end": 278,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 283,
            "end": 293,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 286,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 286,
              "end": 293,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 290,
                "end": 293,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 299,
            "end": 314,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 302,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 305,
              "end": 314,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 311,
                "end": 314,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 319,
            "end": 334,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 319,
              "end": 322,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 325,
              "end": 334,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 331,
                "end": 334,
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
      "start": 338,
      "end": 387,
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 349,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 350,
        "end": 387,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 356,
            "end": 368,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 356,
              "end": 359,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 359,
              "end": 367,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 361,
                "end": 367
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 373,
            "end": 385,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 373,
              "end": 376,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 384,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 378,
                "end": 384
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
      "type": "VariableDeclaration",
      "start": 389,
      "end": 472,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 393,
          "end": 472,
          "id": {
            "type": "Identifier",
            "start": 393,
            "end": 472,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 472,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 396,
                "end": 472,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 402,
                    "end": 414,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 402,
                      "end": 405,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 405,
                      "end": 413,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 407,
                        "end": 413
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 419,
                    "end": 431,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 419,
                      "end": 422,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 422,
                      "end": 430,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 424,
                        "end": 430
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 437,
                    "end": 451,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 437,
                      "end": 440,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 440,
                      "end": 450,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 442,
                        "end": 450,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 445,
                          "end": 450,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 448,
                            "end": 450,
                            "members": []
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 456,
                    "end": 470,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 456,
                      "end": 459,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 459,
                      "end": 469,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 461,
                        "end": 469,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 464,
                          "end": 469,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 467,
                            "end": 469,
                            "members": []
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 474,
      "end": 550,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 478,
          "end": 550,
          "id": {
            "type": "Identifier",
            "start": 478,
            "end": 479,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 482,
            "end": 550,
            "properties": [
              {
                "type": "Property",
                "start": 488,
                "end": 495,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 491,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 493,
                  "end": 495,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 501,
                "end": 508,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 504,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 506,
                  "end": 508,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 514,
                "end": 528,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 517,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 519,
                  "end": 528,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 525,
                    "end": 528,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 534,
                "end": 548,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 537,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 539,
                  "end": 548,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 545,
                    "end": 548,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
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
