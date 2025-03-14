file.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 1811,
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
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 115,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 40,
        "end": 115,
        "body": {
          "type": "TSInterfaceBody",
          "start": 65,
          "end": 115,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 71,
              "end": 89,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 71,
                "end": 79,
                "decorators": [],
                "name": "children",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 88,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 82,
                  "end": 88
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 94,
              "end": 113,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 103,
                "decorators": [],
                "name": "className",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 112,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 106,
                  "end": 112
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 64,
          "decorators": [],
          "name": "ClickableProps",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 117,
      "end": 215,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 124,
        "end": 215,
        "body": {
          "type": "TSInterfaceBody",
          "start": 169,
          "end": 215,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 175,
              "end": 213,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 175,
                "end": 182,
                "decorators": [],
                "name": "onClick",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 182,
                "end": 212,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 184,
                  "end": 212,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 207,
                    "end": 212,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 208,
                        "end": 211
                      }
                    ]
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 184,
                    "end": 207,
                    "left": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 189,
                      "decorators": [],
                      "name": "React",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 207,
                      "decorators": [],
                      "name": "MouseEventHandler",
                      "optional": false
                    }
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 154,
            "end": 168,
            "expression": {
              "type": "Identifier",
              "start": 154,
              "end": 168,
              "decorators": [],
              "name": "ClickableProps",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 134,
          "end": 145,
          "decorators": [],
          "name": "ButtonProps",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 217,
      "end": 286,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 224,
        "end": 286,
        "body": {
          "type": "TSInterfaceBody",
          "start": 267,
          "end": 286,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 273,
              "end": 284,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 273,
                "end": 275,
                "decorators": [],
                "name": "to",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 275,
                "end": 283,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 277,
                  "end": 283
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 252,
            "end": 266,
            "expression": {
              "type": "Identifier",
              "start": 252,
              "end": 266,
              "decorators": [],
              "name": "ClickableProps",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 234,
          "end": 243,
          "decorators": [],
          "name": "LinkProps",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 288,
      "end": 370,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 295,
        "end": 370,
        "body": {
          "type": "TSInterfaceBody",
          "start": 340,
          "end": 370,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 346,
              "end": 368,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 346,
                "end": 359,
                "raw": "\"data-format\"",
                "value": "data-format"
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 359,
                "end": 367,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 361,
                  "end": 367
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 325,
            "end": 339,
            "expression": {
              "type": "Identifier",
              "start": 325,
              "end": 339,
              "decorators": [],
              "name": "ClickableProps",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 305,
          "end": 316,
          "decorators": [],
          "name": "HyphenProps",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 372,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 419,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 379,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 382,
            "end": 419,
            "properties": [
              {
                "type": "Property",
                "start": 388,
                "end": 402,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 396,
                  "decorators": [],
                  "name": "children",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 398,
                  "end": 402,
                  "raw": "\"hi\"",
                  "value": "hi"
                }
              },
              {
                "type": "Property",
                "start": 408,
                "end": 417,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 410,
                  "decorators": [],
                  "name": "to",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 412,
                  "end": 417,
                  "raw": "\"boo\"",
                  "value": "boo"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 420,
      "end": 434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 433,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 433,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 433,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 430,
                "end": 433
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
      "type": "VariableDeclaration",
      "start": 435,
      "end": 471,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 439,
          "end": 471,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 439,
            "end": 443,
            "decorators": [],
            "name": "obj2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 446,
            "end": 471,
            "properties": [
              {
                "type": "Property",
                "start": 452,
                "end": 469,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 452,
                  "end": 459,
                  "decorators": [],
                  "name": "onClick",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 461,
                  "end": 469,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 467,
                    "end": 469,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 473,
      "end": 539,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 480,
        "end": 539,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 489,
          "end": 499,
          "decorators": [],
          "name": "MainButton",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 500,
            "end": 524,
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 511,
              "end": 524,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 513,
                "end": 524,
                "typeName": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 524,
                  "decorators": [],
                  "name": "ButtonProps",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 525,
          "end": 538,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 527,
            "end": 538,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 527,
              "end": 538,
              "left": {
                "type": "Identifier",
                "start": 527,
                "end": 530,
                "decorators": [],
                "name": "JSX",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 531,
                "end": 538,
                "decorators": [],
                "name": "Element",
                "optional": false
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
      "start": 540,
      "end": 602,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 547,
        "end": 602,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 556,
          "end": 566,
          "decorators": [],
          "name": "MainButton",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 567,
            "end": 587,
            "decorators": [],
            "name": "linkProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 576,
              "end": 587,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 578,
                "end": 587,
                "typeName": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 587,
                  "decorators": [],
                  "name": "LinkProps",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 588,
          "end": 601,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 590,
            "end": 601,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 590,
              "end": 601,
              "left": {
                "type": "Identifier",
                "start": 590,
                "end": 593,
                "decorators": [],
                "name": "JSX",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 594,
                "end": 601,
                "decorators": [],
                "name": "Element",
                "optional": false
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
      "start": 603,
      "end": 669,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 610,
        "end": 669,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 619,
          "end": 629,
          "decorators": [],
          "name": "MainButton",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 630,
            "end": 654,
            "decorators": [],
            "name": "hyphenProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 641,
              "end": 654,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 643,
                "end": 654,
                "typeName": {
                  "type": "Identifier",
                  "start": 643,
                  "end": 654,
                  "decorators": [],
                  "name": "HyphenProps",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 655,
          "end": 668,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 657,
            "end": 668,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 657,
              "end": 668,
              "left": {
                "type": "Identifier",
                "start": 657,
                "end": 660,
                "decorators": [],
                "name": "JSX",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 661,
                "end": 668,
                "decorators": [],
                "name": "Element",
                "optional": false
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
      "start": 670,
      "end": 915,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 677,
        "end": 915,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 756,
          "end": 915,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 762,
              "end": 799,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 768,
                  "end": 798,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 768,
                    "end": 777,
                    "decorators": [],
                    "name": "linkProps",
                    "optional": false
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "start": 780,
                    "end": 798,
                    "expression": {
                      "type": "Identifier",
                      "start": 780,
                      "end": 785,
                      "decorators": [],
                      "name": "props",
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 789,
                      "end": 798,
                      "typeName": {
                        "type": "Identifier",
                        "start": 789,
                        "end": 798,
                        "decorators": [],
                        "name": "LinkProps",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "IfStatement",
              "start": 804,
              "end": 871,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 821,
                "end": 871,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 831,
                    "end": 865,
                    "argument": {
                      "type": "CallExpression",
                      "start": 838,
                      "end": 864,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 858,
                          "end": 863,
                          "decorators": [],
                          "name": "props",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 838,
                        "end": 857,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 838,
                          "end": 842
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 843,
                          "end": 857,
                          "decorators": [],
                          "name": "_buildMainLink",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "MemberExpression",
                "start": 807,
                "end": 819,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 807,
                  "end": 816,
                  "decorators": [],
                  "name": "linkProps",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 817,
                  "end": 819,
                  "decorators": [],
                  "name": "to",
                  "optional": false
                }
              }
            },
            {
              "type": "ReturnStatement",
              "start": 877,
              "end": 913,
              "argument": {
                "type": "CallExpression",
                "start": 884,
                "end": 912,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 906,
                    "end": 911,
                    "decorators": [],
                    "name": "props",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 884,
                  "end": 905,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 884,
                    "end": 888
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 889,
                    "end": 905,
                    "decorators": [],
                    "name": "_buildMainButton",
                    "optional": false
                  }
                },
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 686,
          "end": 696,
          "decorators": [],
          "name": "MainButton",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 697,
            "end": 741,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 702,
              "end": 741,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 704,
                "end": 741,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 704,
                    "end": 715,
                    "typeName": {
                      "type": "Identifier",
                      "start": 704,
                      "end": 715,
                      "decorators": [],
                      "name": "ButtonProps",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 718,
                    "end": 727,
                    "typeName": {
                      "type": "Identifier",
                      "start": 718,
                      "end": 727,
                      "decorators": [],
                      "name": "LinkProps",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 730,
                    "end": 741,
                    "typeName": {
                      "type": "Identifier",
                      "start": 730,
                      "end": 741,
                      "decorators": [],
                      "name": "HyphenProps",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 742,
          "end": 755,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 744,
            "end": 755,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 744,
              "end": 755,
              "left": {
                "type": "Identifier",
                "start": 744,
                "end": 747,
                "decorators": [],
                "name": "JSX",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 748,
                "end": 755,
                "decorators": [],
                "name": "Element",
                "optional": false
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
      "type": "VariableDeclaration",
      "start": 923,
      "end": 978,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 929,
          "end": 977,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 929,
            "end": 931,
            "decorators": [],
            "name": "b0",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 934,
            "end": 977,
            "children": [
              {
                "type": "JSXText",
                "start": 962,
                "end": 964,
                "raw": "GO",
                "value": "GO"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 964,
              "end": 977,
              "name": {
                "type": "JSXIdentifier",
                "start": 966,
                "end": 976,
                "name": "MainButton"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 934,
              "end": 962,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 946,
                  "end": 961,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 946,
                    "end": 948,
                    "name": "to"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 949,
                    "end": 961,
                    "raw": "'/some/path'",
                    "value": "/some/path"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 935,
                "end": 945,
                "name": "MainButton"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 979,
      "end": 1047,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 985,
          "end": 1046,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 985,
            "end": 987,
            "decorators": [],
            "name": "b1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 990,
            "end": 1046,
            "children": [
              {
                "type": "JSXText",
                "start": 1022,
                "end": 1033,
                "raw": "Hello world",
                "value": "Hello world"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 1033,
              "end": 1046,
              "name": {
                "type": "JSXIdentifier",
                "start": 1035,
                "end": 1045,
                "name": "MainButton"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 990,
              "end": 1022,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1002,
                  "end": 1021,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1002,
                    "end": 1009,
                    "name": "onClick"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 1010,
                    "end": 1021,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1011,
                      "end": 1020,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1018,
                        "end": 1020,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1012,
                          "end": 1013,
                          "decorators": [],
                          "name": "e",
                          "optional": false
                        }
                      ]
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 991,
                "end": 1001,
                "name": "MainButton"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1048,
      "end": 1083,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1054,
          "end": 1082,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1054,
            "end": 1056,
            "decorators": [],
            "name": "b2",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1059,
            "end": 1082,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1059,
              "end": 1082,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1071,
                  "end": 1079,
                  "argument": {
                    "type": "Identifier",
                    "start": 1075,
                    "end": 1078,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1060,
                "end": 1070,
                "name": "MainButton"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1084,
      "end": 1136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1090,
          "end": 1135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1090,
            "end": 1092,
            "decorators": [],
            "name": "b3",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1095,
            "end": 1135,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1095,
              "end": 1135,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1107,
                  "end": 1123,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1111,
                    "end": 1122,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1112,
                        "end": 1121,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1112,
                          "end": 1114,
                          "decorators": [],
                          "name": "to",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 1116,
                          "end": 1121,
                          "raw": "10000",
                          "value": 10000
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1124,
                  "end": 1132,
                  "argument": {
                    "type": "Identifier",
                    "start": 1128,
                    "end": 1131,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1096,
                "end": 1106,
                "name": "MainButton"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1137,
      "end": 1173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1143,
          "end": 1172,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1143,
            "end": 1145,
            "decorators": [],
            "name": "b4",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1148,
            "end": 1172,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1148,
              "end": 1172,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1160,
                  "end": 1169,
                  "argument": {
                    "type": "Identifier",
                    "start": 1164,
                    "end": 1168,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1149,
                "end": 1159,
                "name": "MainButton"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1212,
      "end": 1267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1218,
          "end": 1266,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1218,
            "end": 1220,
            "decorators": [],
            "name": "b5",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1223,
            "end": 1266,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1223,
              "end": 1266,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1235,
                  "end": 1244,
                  "argument": {
                    "type": "Identifier",
                    "start": 1239,
                    "end": 1243,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1245,
                  "end": 1263,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1245,
                    "end": 1247,
                    "name": "to"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1248,
                    "end": 1263,
                    "raw": "\"/to/somewhere\"",
                    "value": "/to/somewhere"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1224,
                "end": 1234,
                "name": "MainButton"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1304,
      "end": 1340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1310,
          "end": 1339,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1310,
            "end": 1312,
            "decorators": [],
            "name": "b6",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1315,
            "end": 1339,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1315,
              "end": 1339,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1327,
                  "end": 1336,
                  "argument": {
                    "type": "Identifier",
                    "start": 1331,
                    "end": 1335,
                    "decorators": [],
                    "name": "obj2",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1316,
                "end": 1326,
                "name": "MainButton"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1341,
      "end": 1411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1347,
          "end": 1410,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1347,
            "end": 1349,
            "decorators": [],
            "name": "b7",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1352,
            "end": 1410,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1352,
              "end": 1410,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1364,
                  "end": 1407,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1368,
                    "end": 1406,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1369,
                        "end": 1405,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1369,
                          "end": 1376,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 1378,
                          "end": 1405,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1384,
                            "end": 1405,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 1386,
                                "end": 1403,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 1386,
                                  "end": 1403,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 1398,
                                      "end": 1402,
                                      "raw": "\"hi\"",
                                      "value": "hi"
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1386,
                                    "end": 1397,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1386,
                                      "end": 1393,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1394,
                                      "end": 1397,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1353,
                "end": 1363,
                "name": "MainButton"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1412,
      "end": 1458,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1418,
          "end": 1457,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1418,
            "end": 1420,
            "decorators": [],
            "name": "b8",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1423,
            "end": 1457,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1423,
              "end": 1457,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1435,
                  "end": 1454,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1439,
                    "end": 1453,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1440,
                        "end": 1452,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1440,
                          "end": 1447,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false
                        },
                        "kind": "init",
                        "method": true,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 1447,
                          "end": 1452,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1450,
                            "end": 1452,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1424,
                "end": 1434,
                "name": "MainButton"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1519,
      "end": 1585,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1525,
          "end": 1584,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1525,
            "end": 1527,
            "decorators": [],
            "name": "b9",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1530,
            "end": 1584,
            "children": [
              {
                "type": "JSXText",
                "start": 1569,
                "end": 1571,
                "raw": "GO",
                "value": "GO"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 1571,
              "end": 1584,
              "name": {
                "type": "JSXIdentifier",
                "start": 1573,
                "end": 1583,
                "name": "MainButton"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1530,
              "end": 1569,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1542,
                  "end": 1557,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1542,
                    "end": 1544,
                    "name": "to"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1545,
                    "end": 1557,
                    "raw": "'/some/path'",
                    "value": "/some/path"
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1558,
                  "end": 1568,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1558,
                    "end": 1568,
                    "name": "extra-prop"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1531,
                "end": 1541,
                "name": "MainButton"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1586,
      "end": 1655,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1592,
          "end": 1654,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1592,
            "end": 1595,
            "decorators": [],
            "name": "b10",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1598,
            "end": 1654,
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 1641,
              "end": 1654,
              "name": {
                "type": "JSXIdentifier",
                "start": 1643,
                "end": 1653,
                "name": "MainButton"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1598,
              "end": 1641,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1610,
                  "end": 1625,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1610,
                    "end": 1612,
                    "name": "to"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1613,
                    "end": 1625,
                    "raw": "'/some/path'",
                    "value": "/some/path"
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1626,
                  "end": 1639,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1626,
                    "end": 1634,
                    "name": "children"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1635,
                    "end": 1639,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1599,
                "end": 1609,
                "name": "MainButton"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1656,
      "end": 1755,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1662,
          "end": 1754,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1662,
            "end": 1665,
            "decorators": [],
            "name": "b11",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1668,
            "end": 1754,
            "children": [
              {
                "type": "JSXText",
                "start": 1730,
                "end": 1741,
                "raw": "Hello world",
                "value": "Hello world"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 1741,
              "end": 1754,
              "name": {
                "type": "JSXIdentifier",
                "start": 1743,
                "end": 1753,
                "name": "MainButton"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1668,
              "end": 1730,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1680,
                  "end": 1699,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1680,
                    "end": 1687,
                    "name": "onClick"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 1688,
                    "end": 1699,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1689,
                      "end": 1698,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1696,
                        "end": 1698,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1690,
                          "end": 1691,
                          "decorators": [],
                          "name": "e",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1700,
                  "end": 1717,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1700,
                    "end": 1709,
                    "name": "className"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1710,
                    "end": 1717,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1718,
                  "end": 1729,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1718,
                    "end": 1729,
                    "name": "data-format"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1669,
                "end": 1679,
                "name": "MainButton"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1756,
      "end": 1808,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1762,
          "end": 1808,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1762,
            "end": 1765,
            "decorators": [],
            "name": "b12",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1768,
            "end": 1808,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1768,
              "end": 1808,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1780,
                  "end": 1805,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1780,
                    "end": 1791,
                    "name": "data-format"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1792,
                    "end": 1805,
                    "raw": "\"Hello world\"",
                    "value": "Hello world"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1769,
                "end": 1779,
                "name": "MainButton"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
