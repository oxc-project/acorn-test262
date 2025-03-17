__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 15,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 15,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 16,
      "end": 34,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 30,
          "end": 32,
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 32,
            "name": "T1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 30,
            "end": 32,
            "name": "T1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 23,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 22,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 19,
          "name": "T2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 20,
          "end": 22,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 15,
          "name": "C3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 16,
          "end": 18,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
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
  "end": 518,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "name": "T1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "name": "T1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 28,
        "value": "./type1",
        "raw": "\"./type1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 60,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 37,
          "end": 44,
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 44,
            "name": "t1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 50,
        "end": 59,
        "value": "./type1",
        "raw": "\"./type1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 61,
      "end": 95,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 75,
          "end": 77,
          "imported": {
            "type": "Identifier",
            "start": 75,
            "end": 77,
            "name": "T2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 75,
            "end": 77,
            "name": "T2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 85,
        "end": 94,
        "value": "./type2",
        "raw": "\"./type2\""
      },
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 96,
      "end": 126,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 105,
          "end": 107,
          "imported": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "name": "C3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "name": "C3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 115,
        "end": 125,
        "value": "./class3",
        "raw": "\"./class3\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 157,
            "name": "EventListener",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 157,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 154,
                "end": 157
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
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 160,
      "end": 517,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 176,
        "name": "HelloWorld",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 177,
        "end": 517,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 181,
            "end": 229,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 215,
              "name": "handleEvent1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 229,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 216,
                  "end": 225,
                  "name": "event",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 221,
                    "end": 225,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 223,
                      "end": 225,
                      "typeName": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 225,
                        "name": "T1",
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
                "start": 227,
                "end": 229,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 181,
                "end": 200,
                "expression": {
                  "type": "CallExpression",
                  "start": 182,
                  "end": 200,
                  "callee": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 195,
                    "name": "EventListener",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 196,
                      "end": 199,
                      "value": "1",
                      "raw": "'1'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 292,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 266,
              "end": 278,
              "name": "handleEvent2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 278,
              "end": 292,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 279,
                  "end": 288,
                  "name": "event",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 284,
                    "end": 288,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 286,
                      "end": 288,
                      "typeName": {
                        "type": "Identifier",
                        "start": 286,
                        "end": 288,
                        "name": "T2",
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
                "start": 290,
                "end": 292,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 244,
                "end": 263,
                "expression": {
                  "type": "CallExpression",
                  "start": 245,
                  "end": 263,
                  "callee": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 258,
                    "name": "EventListener",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 259,
                      "end": 262,
                      "value": "2",
                      "raw": "'2'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 302,
            "end": 332,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 326,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 302,
                "end": 321,
                "expression": {
                  "type": "CallExpression",
                  "start": 303,
                  "end": 321,
                  "callee": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 316,
                    "name": "EventListener",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 317,
                      "end": 320,
                      "value": "1",
                      "raw": "'1'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 327,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 329,
                "end": 331,
                "typeName": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 331,
                  "name": "T1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 345,
            "end": 381,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 367,
              "end": 372,
              "name": "p1_ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 345,
                "end": 364,
                "expression": {
                  "type": "CallExpression",
                  "start": 346,
                  "end": 364,
                  "callee": {
                    "type": "Identifier",
                    "start": 346,
                    "end": 359,
                    "name": "EventListener",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 360,
                      "end": 363,
                      "value": "1",
                      "raw": "'1'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 373,
              "end": 380,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 375,
                "end": 380,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 375,
                  "end": 380,
                  "left": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 377,
                    "name": "t1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 380,
                    "name": "T1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 391,
            "end": 421,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 413,
              "end": 415,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 391,
                "end": 410,
                "expression": {
                  "type": "CallExpression",
                  "start": 392,
                  "end": 410,
                  "callee": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 405,
                    "name": "EventListener",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 406,
                      "end": 409,
                      "value": "2",
                      "raw": "'2'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 420,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 418,
                "end": 420,
                "typeName": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 420,
                  "name": "T2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 431,
            "end": 502,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 453,
              "end": 465,
              "name": "handleEvent3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 465,
              "end": 502,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 466,
                  "end": 475,
                  "name": "event",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 471,
                    "end": 475,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 473,
                      "end": 475,
                      "typeName": {
                        "type": "Identifier",
                        "start": 473,
                        "end": 475,
                        "name": "C3",
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
                "start": 481,
                "end": 502,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 483,
                    "end": 500,
                    "argument": {
                      "type": "TSNonNullExpression",
                      "start": 490,
                      "end": 500,
                      "expression": {
                        "type": "Identifier",
                        "start": 490,
                        "end": 499,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 476,
                "end": 480,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 478,
                  "end": 480,
                  "typeName": {
                    "type": "Identifier",
                    "start": 478,
                    "end": 480,
                    "name": "T1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 431,
                "end": 450,
                "expression": {
                  "type": "CallExpression",
                  "start": 432,
                  "end": 450,
                  "callee": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 445,
                    "name": "EventListener",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 446,
                      "end": 449,
                      "value": "3",
                      "raw": "'3'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
