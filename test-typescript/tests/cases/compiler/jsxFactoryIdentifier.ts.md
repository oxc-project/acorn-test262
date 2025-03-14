Element.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 731,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 340,
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 340,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 338,
            "body": {
              "type": "TSInterfaceBody",
              "start": 46,
              "end": 338,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 56,
                  "end": 69,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 60,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 60,
                    "end": 68,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 62,
                      "end": 68
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 78,
                  "end": 99,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 89,
                    "decorators": [],
                    "name": "isIntrinsic",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 89,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 91,
                      "end": 98
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 108,
                  "end": 133,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 123,
                    "decorators": [],
                    "name": "isCustomElement",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 123,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 125,
                      "end": 132
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 142,
                  "end": 178,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 150,
                    "decorators": [],
                    "name": "toString",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 151,
                      "end": 168,
                      "decorators": [],
                      "name": "renderId",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 160,
                        "end": 168,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 162,
                          "end": 168
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 169,
                    "end": 177,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 171,
                      "end": 177
                    }
                  },
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 187,
                  "end": 222,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 194,
                    "decorators": [],
                    "name": "bindDOM",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 195,
                      "end": 212,
                      "decorators": [],
                      "name": "renderId",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 204,
                        "end": 212,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 206,
                          "end": 212
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 213,
                    "end": 221,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 215,
                      "end": 221
                    }
                  },
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 231,
                  "end": 254,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 245,
                    "decorators": [],
                    "name": "resetComponent",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 247,
                    "end": 253,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 249,
                      "end": 253
                    }
                  },
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 263,
                  "end": 312,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 284,
                    "decorators": [],
                    "name": "instantiateComponents",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 285,
                      "end": 302,
                      "decorators": [],
                      "name": "renderId",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 294,
                        "end": 302,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 296,
                          "end": 302
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 303,
                    "end": 311,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 305,
                      "end": 311
                    }
                  },
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 321,
                  "end": 332,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 326,
                    "decorators": [],
                    "name": "props",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 326,
                    "end": 331,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 328,
                      "end": 331
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 45,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 341,
      "end": 577,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 348,
        "end": 577,
        "body": {
          "type": "TSModuleBlock",
          "start": 366,
          "end": 577,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 372,
              "end": 491,
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 379,
                "end": 491,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 426,
                  "end": 491,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 436,
                      "end": 485,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 443,
                        "end": 484,
                        "operator": "!==",
                        "left": {
                          "type": "MemberExpression",
                          "start": 443,
                          "end": 470,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 443,
                            "end": 445,
                            "decorators": [],
                            "name": "el",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 446,
                            "end": 470,
                            "decorators": [],
                            "name": "markAsChildOfRootElement",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 475,
                          "end": 484,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false
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
                  "start": 388,
                  "end": 397,
                  "decorators": [],
                  "name": "isElement",
                  "optional": false
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 398,
                    "end": 405,
                    "decorators": [],
                    "name": "el",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 400,
                      "end": 405,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 402,
                        "end": 405
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 406,
                  "end": 425,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 408,
                    "end": 425,
                    "asserts": false,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 410,
                      "decorators": [],
                      "name": "el",
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 414,
                      "end": 425,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 414,
                        "end": 425,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 414,
                          "end": 425,
                          "left": {
                            "type": "Identifier",
                            "start": 414,
                            "end": 417,
                            "decorators": [],
                            "name": "JSX",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 418,
                            "end": 425,
                            "decorators": [],
                            "name": "Element",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 497,
              "end": 575,
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 504,
                "end": 575,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 540,
                  "end": 575,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 551,
                      "end": 569,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 558,
                        "end": 569,
                        "properties": []
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 526,
                  "decorators": [],
                  "name": "createElement",
                  "optional": false
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 527,
                    "end": 538,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 531,
                      "end": 538,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 533,
                        "end": 538,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 533,
                          "end": 536
                        }
                      }
                    }
                  }
                ]
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 358,
          "end": 365,
          "decorators": [],
          "name": "Element",
          "optional": false
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 579,
      "end": 628,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 586,
        "end": 628,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 590,
            "end": 627,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 590,
              "end": 603,
              "decorators": [],
              "name": "createElement",
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 606,
              "end": 627,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 606,
                "end": 613,
                "decorators": [],
                "name": "Element",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 614,
                "end": 627,
                "decorators": [],
                "name": "createElement",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 630,
      "end": 730,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 673,
        "end": 730,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 679,
            "end": 728,
            "argument": {
              "type": "BinaryExpression",
              "start": 686,
              "end": 727,
              "operator": "+",
              "left": {
                "type": "CallExpression",
                "start": 686,
                "end": 707,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 686,
                  "end": 705,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 686,
                    "end": 693,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 686,
                      "end": 690,
                      "decorators": [],
                      "name": "text",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 691,
                      "end": 692,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 694,
                    "end": 705,
                    "decorators": [],
                    "name": "toLowerCase",
                    "optional": false
                  }
                },
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 710,
                "end": 727,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 725,
                    "end": 726,
                    "raw": "1",
                    "value": 1
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 710,
                  "end": 724,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 710,
                    "end": 714,
                    "decorators": [],
                    "name": "text",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 715,
                    "end": 724,
                    "decorators": [],
                    "name": "substring",
                    "optional": false
                  }
                },
                "optional": false
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
        "start": 639,
        "end": 650,
        "decorators": [],
        "name": "toCamelCase",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 651,
          "end": 663,
          "decorators": [],
          "name": "text",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 655,
            "end": 663,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 657,
              "end": 663
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 664,
        "end": 672,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 666,
          "end": 672
        }
      }
    }
  ],
  "sourceType": "module"
}
```
test.tsx
```json
'>' expected.
```
