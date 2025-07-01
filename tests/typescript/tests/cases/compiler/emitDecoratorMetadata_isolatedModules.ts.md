__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 13,
        "end": 15
      },
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 32
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 32
          },
          "exportKind": "value",
          "start": 30,
          "end": 32
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 16,
      "end": 34
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T2",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 20,
          "end": 22
        },
        "declare": false,
        "start": 7,
        "end": 22
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 23
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C3",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 15
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 16,
          "end": 18
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 18
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 18
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 19
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 11
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 11
          },
          "importKind": "value",
          "start": 9,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./type1",
        "raw": "\"./type1\"",
        "start": 19,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 44
          },
          "start": 37,
          "end": 44
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./type1",
        "raw": "\"./type1\"",
        "start": 50,
        "end": 59
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 30,
      "end": 60
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 77
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 77
          },
          "importKind": "value",
          "start": 75,
          "end": 77
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./type2",
        "raw": "\"./type2\"",
        "start": 85,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 61,
      "end": 95
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C3",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 107
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C3",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 107
          },
          "importKind": "value",
          "start": 105,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./class3",
        "raw": "\"./class3\"",
        "start": 115,
        "end": 125
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 96,
      "end": 126
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "EventListener",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 154,
                "end": 157
              },
              "start": 152,
              "end": 157
            },
            "start": 139,
            "end": 157
          },
          "init": null,
          "definite": false,
          "start": 139,
          "end": 157
        }
      ],
      "declare": true,
      "start": 127,
      "end": 158
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HelloWorld",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 176
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventListener",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
                    "end": 195
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 196,
                      "end": 199
                    }
                  ],
                  "optional": false,
                  "start": 182,
                  "end": 200
                },
                "start": 181,
                "end": 200
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handleEvent1",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 215
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "event",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 223,
                        "end": 225
                      },
                      "typeArguments": null,
                      "start": 223,
                      "end": 225
                    },
                    "start": 221,
                    "end": 225
                  },
                  "start": 216,
                  "end": 225
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 227,
                "end": 229
              },
              "expression": false,
              "start": 215,
              "end": 229
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 181,
            "end": 229
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventListener",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 258
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 259,
                      "end": 262
                    }
                  ],
                  "optional": false,
                  "start": 245,
                  "end": 263
                },
                "start": 244,
                "end": 263
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handleEvent2",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 278
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "event",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 286,
                        "end": 288
                      },
                      "typeArguments": null,
                      "start": 286,
                      "end": 288
                    },
                    "start": 284,
                    "end": 288
                  },
                  "start": 279,
                  "end": 288
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 290,
                "end": 292
              },
              "expression": false,
              "start": 278,
              "end": 292
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 244,
            "end": 292
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventListener",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 303,
                    "end": 316
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 317,
                      "end": 320
                    }
                  ],
                  "optional": false,
                  "start": 303,
                  "end": 321
                },
                "start": 302,
                "end": 321
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 326
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 331
                },
                "typeArguments": null,
                "start": 329,
                "end": 331
              },
              "start": 327,
              "end": 331
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 302,
            "end": 332
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventListener",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 346,
                    "end": 359
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 360,
                      "end": 363
                    }
                  ],
                  "optional": false,
                  "start": 346,
                  "end": 364
                },
                "start": 345,
                "end": 364
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1_ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 372
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 377
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 378,
                    "end": 380
                  },
                  "start": 375,
                  "end": 380
                },
                "typeArguments": null,
                "start": 375,
                "end": 380
              },
              "start": 373,
              "end": 380
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 345,
            "end": 381
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventListener",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 405
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 406,
                      "end": 409
                    }
                  ],
                  "optional": false,
                  "start": 392,
                  "end": 410
                },
                "start": 391,
                "end": 410
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 415
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 420
                },
                "typeArguments": null,
                "start": 418,
                "end": 420
              },
              "start": 416,
              "end": 420
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 391,
            "end": 421
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventListener",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 445
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "3",
                      "raw": "'3'",
                      "start": 446,
                      "end": 449
                    }
                  ],
                  "optional": false,
                  "start": 432,
                  "end": 450
                },
                "start": 431,
                "end": 450
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handleEvent3",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 465
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "event",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 473,
                        "end": 475
                      },
                      "typeArguments": null,
                      "start": 473,
                      "end": 475
                    },
                    "start": 471,
                    "end": 475
                  },
                  "start": 466,
                  "end": 475
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 478,
                    "end": 480
                  },
                  "typeArguments": null,
                  "start": 478,
                  "end": 480
                },
                "start": 476,
                "end": 480
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 490,
                        "end": 499
                      },
                      "start": 490,
                      "end": 500
                    },
                    "start": 483,
                    "end": 500
                  }
                ],
                "start": 481,
                "end": 502
              },
              "expression": false,
              "start": 465,
              "end": 502
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 431,
            "end": 502
          }
        ],
        "start": 177,
        "end": 517
      },
      "abstract": false,
      "declare": false,
      "start": 160,
      "end": 517
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 517
}
```
