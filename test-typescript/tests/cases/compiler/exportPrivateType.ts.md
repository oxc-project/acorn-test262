__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 546,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 463,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 463,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 17,
            "end": 67,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 25,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 26,
              "end": 67,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 36,
                  "end": 46,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
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
                    "start": 37,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 39,
                      "end": 45
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 55,
                  "end": 61,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
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
                    "start": 56,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 58,
                      "end": 60,
                      "typeName": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 60,
                        "name": "C1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
          {
            "type": "ClassDeclaration",
            "start": 74,
            "end": 122,
            "id": {
              "type": "Identifier",
              "start": 80,
              "end": 82,
              "name": "C2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 83,
              "end": 122,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 93,
                  "end": 116,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 97,
                    "name": "test",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 97,
                    "end": 116,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 100,
                      "end": 116,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 102,
                          "end": 114,
                          "argument": {
                            "type": "Literal",
                            "start": 109,
                            "end": 113,
                            "value": true,
                            "raw": "true"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
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
          {
            "type": "TSInterfaceDeclaration",
            "start": 129,
            "end": 225,
            "id": {
              "type": "Identifier",
              "start": 139,
              "end": 141,
              "name": "I1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 142,
              "end": 225,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 152,
                  "end": 183,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 153,
                      "end": 162,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 154,
                        "end": 162,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 156,
                          "end": 162
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 164,
                      "end": 173,
                      "name": "b",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 165,
                        "end": 173,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 167,
                          "end": 173
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 174,
                    "end": 182,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 176,
                      "end": 182
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 192,
                  "end": 219,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 193,
                      "end": 202,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 194,
                        "end": 202,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 196,
                          "end": 202
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 204,
                      "end": 213,
                      "name": "y",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 205,
                        "end": 213,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 207,
                          "end": 213
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 214,
                    "end": 218,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 216,
                      "end": 218,
                      "typeName": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 218,
                        "name": "I1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 232,
            "end": 290,
            "id": {
              "type": "Identifier",
              "start": 242,
              "end": 244,
              "name": "I2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 245,
              "end": 290,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 255,
                  "end": 265,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 256,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 256,
                    "end": 264,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 258,
                      "end": 264
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 274,
                  "end": 284,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 275,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 275,
                    "end": 283,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 277,
                      "end": 283
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
            "type": "ExportNamedDeclaration",
            "start": 378,
            "end": 395,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 385,
              "end": 395,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 389,
                  "end": 394,
                  "id": {
                    "type": "Identifier",
                    "start": 389,
                    "end": 394,
                    "name": "e",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 390,
                      "end": 394,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 392,
                        "end": 394,
                        "typeName": {
                          "type": "Identifier",
                          "start": 392,
                          "end": 394,
                          "name": "C1",
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 400,
            "end": 417,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 407,
              "end": 417,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 411,
                  "end": 416,
                  "id": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 416,
                    "name": "f",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 412,
                      "end": 416,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 414,
                        "end": 416,
                        "typeName": {
                          "type": "Identifier",
                          "start": 414,
                          "end": 416,
                          "name": "I1",
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 422,
            "end": 439,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 429,
              "end": 439,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 433,
                  "end": 438,
                  "id": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 438,
                    "name": "g",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 434,
                      "end": 438,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 436,
                        "end": 438,
                        "typeName": {
                          "type": "Identifier",
                          "start": 436,
                          "end": 438,
                          "name": "C2",
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 444,
            "end": 461,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 451,
              "end": 461,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 455,
                  "end": 460,
                  "id": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 460,
                    "name": "h",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 456,
                      "end": 460,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 458,
                        "end": 460,
                        "typeName": {
                          "type": "Identifier",
                          "start": 458,
                          "end": 460,
                          "name": "I2",
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
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 480,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 479,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 471,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 474,
            "end": 479,
            "object": {
              "type": "Identifier",
              "start": 474,
              "end": 477,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
