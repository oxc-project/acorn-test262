__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 638,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "name": "Constructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "C",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 25,
        "end": 53,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 27,
            "end": 51,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 32,
                "end": 46,
                "argument": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 39,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 46,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 41,
                    "end": 46,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 41,
                      "end": 44
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 50,
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "name": "C",
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
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 69,
        "name": "mixin",
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
          "start": 97,
          "end": 104,
          "name": "Base",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 101,
            "end": 104,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 103,
              "end": 104,
              "typeName": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "name": "B",
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
        "start": 106,
        "end": 195,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 112,
            "end": 168,
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 130,
              "name": "PrivateMixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 139,
              "end": 143,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 144,
              "end": 168,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 154,
                  "end": 162,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 157,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 160,
                    "end": 161,
                    "value": 2,
                    "raw": "2"
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
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
            "type": "ReturnStatement",
            "start": 173,
            "end": 193,
            "argument": {
              "type": "Identifier",
              "start": 180,
              "end": 192,
              "name": "PrivateMixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 69,
        "end": 96,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 95,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 80,
              "end": 95,
              "typeName": {
                "type": "Identifier",
                "start": 80,
                "end": 91,
                "name": "Constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 91,
                "end": 95,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 92,
                    "end": 94,
                    "members": []
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 197,
      "end": 234,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 204,
        "end": 234,
        "id": {
          "type": "Identifier",
          "start": 210,
          "end": 217,
          "name": "Unmixed",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 218,
          "end": 234,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 224,
              "end": 232,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 224,
                "end": 227,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 230,
                "end": 231,
                "value": 1,
                "raw": "1"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 236,
      "end": 272,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 243,
        "end": 272,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 249,
            "end": 271,
            "id": {
              "type": "Identifier",
              "start": 249,
              "end": 254,
              "name": "Mixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 257,
              "end": 271,
              "callee": {
                "type": "Identifier",
                "start": 257,
                "end": 262,
                "name": "mixin",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 263,
                  "end": 270,
                  "name": "Unmixed",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 274,
      "end": 527,
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 289,
        "name": "Filter",
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
          "start": 317,
          "end": 324,
          "name": "ctor",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 321,
            "end": 324,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 323,
              "end": 324,
              "typeName": {
                "type": "Identifier",
                "start": 323,
                "end": 324,
                "name": "C",
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
        "start": 326,
        "end": 527,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 332,
            "end": 501,
            "id": {
              "type": "Identifier",
              "start": 347,
              "end": 358,
              "name": "FilterMixin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 367,
              "end": 371,
              "name": "ctor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 372,
              "end": 501,
              "body": [
                {
                  "type": "TSAbstractMethodDefinition",
                  "start": 382,
                  "end": 420,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 391,
                    "end": 396,
                    "name": "match",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 396,
                    "end": 420,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 397,
                        "end": 409,
                        "name": "path",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 401,
                          "end": 409,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 403,
                            "end": 409
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 410,
                      "end": 419,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 412,
                        "end": 419
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 484,
                  "end": 495,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 489,
                    "name": "thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 492,
                    "end": 494,
                    "value": 12,
                    "raw": "12"
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": true,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ReturnStatement",
            "start": 506,
            "end": 525,
            "argument": {
              "type": "Identifier",
              "start": 513,
              "end": 524,
              "name": "FilterMixin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 289,
        "end": 316,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 290,
            "end": 315,
            "name": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 300,
              "end": 315,
              "typeName": {
                "type": "Identifier",
                "start": 300,
                "end": 311,
                "name": "Constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 311,
                "end": 315,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 312,
                    "end": 314,
                    "members": []
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 529,
      "end": 637,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 536,
        "end": 637,
        "id": {
          "type": "Identifier",
          "start": 542,
          "end": 555,
          "name": "FilteredThing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "CallExpression",
          "start": 564,
          "end": 579,
          "callee": {
            "type": "Identifier",
            "start": 564,
            "end": 570,
            "name": "Filter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 571,
              "end": 578,
              "name": "Unmixed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 580,
          "end": 637,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 586,
              "end": 635,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 586,
                "end": 591,
                "name": "match",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 591,
                "end": 635,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 592,
                    "end": 604,
                    "name": "path",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 596,
                      "end": 604,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 598,
                        "end": 604
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 606,
                  "end": 635,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 616,
                      "end": 629,
                      "argument": {
                        "type": "Literal",
                        "start": 623,
                        "end": 628,
                        "value": false,
                        "raw": "false"
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
