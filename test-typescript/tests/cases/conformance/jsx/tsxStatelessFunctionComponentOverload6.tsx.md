__ESTREE_TEST__:PASS:
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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 115,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 40,
        "end": 115,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 64,
          "name": "ClickableProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 71,
                "end": 79,
                "name": "children",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 88,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 82,
                  "end": 88
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 94,
              "end": 113,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 103,
                "name": "className",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 112,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 106,
                  "end": 112
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 117,
      "end": 215,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 124,
        "end": 215,
        "id": {
          "type": "Identifier",
          "start": 134,
          "end": 145,
          "name": "ButtonProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 154,
            "end": 168,
            "expression": {
              "type": "Identifier",
              "start": 154,
              "end": 168,
              "name": "ClickableProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "typeParameters": null,
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 175,
                "end": 182,
                "name": "onClick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 182,
                "end": 212,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 184,
                  "end": 212,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 184,
                    "end": 207,
                    "left": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 189,
                      "name": "React",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 207,
                      "name": "MouseEventHandler",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 217,
      "end": 286,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 224,
        "end": 286,
        "id": {
          "type": "Identifier",
          "start": 234,
          "end": 243,
          "name": "LinkProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 252,
            "end": 266,
            "expression": {
              "type": "Identifier",
              "start": 252,
              "end": 266,
              "name": "ClickableProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "typeParameters": null,
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 273,
                "end": 275,
                "name": "to",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 275,
                "end": 283,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 288,
      "end": 370,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 295,
        "end": 370,
        "id": {
          "type": "Identifier",
          "start": 305,
          "end": 316,
          "name": "HyphenProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 325,
            "end": 339,
            "expression": {
              "type": "Identifier",
              "start": 325,
              "end": 339,
              "name": "ClickableProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "typeParameters": null,
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 346,
                "end": 359,
                "value": "data-format",
                "raw": "\"data-format\""
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
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 379,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 396,
                  "name": "children",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 398,
                  "end": 402,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 408,
                "end": 417,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 410,
                  "name": "to",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 412,
                  "end": 417,
                  "value": "boo",
                  "raw": "\"boo\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 433,
            "name": "obj1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 433,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 430,
                "end": 433
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 439,
            "end": 443,
            "name": "obj2",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 452,
                  "end": 459,
                  "name": "onClick",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 461,
                  "end": 469,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 467,
                    "end": 469,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 473,
      "end": 539,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 480,
        "end": 539,
        "id": {
          "type": "Identifier",
          "start": 489,
          "end": 499,
          "name": "MainButton",
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
            "start": 500,
            "end": 524,
            "name": "buttonProps",
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
                  "name": "ButtonProps",
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
        "body": null,
        "declare": false,
        "typeParameters": null,
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
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 531,
                "end": 538,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 540,
      "end": 602,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 547,
        "end": 602,
        "id": {
          "type": "Identifier",
          "start": 556,
          "end": 566,
          "name": "MainButton",
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
            "start": 567,
            "end": 587,
            "name": "linkProps",
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
                  "name": "LinkProps",
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
        "body": null,
        "declare": false,
        "typeParameters": null,
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
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 594,
                "end": 601,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 603,
      "end": 669,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 610,
        "end": 669,
        "id": {
          "type": "Identifier",
          "start": 619,
          "end": 629,
          "name": "MainButton",
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
            "start": 630,
            "end": 654,
            "name": "hyphenProps",
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
                  "name": "HyphenProps",
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
        "body": null,
        "declare": false,
        "typeParameters": null,
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
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 661,
                "end": 668,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 670,
      "end": 915,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 677,
        "end": 915,
        "id": {
          "type": "Identifier",
          "start": 686,
          "end": 696,
          "name": "MainButton",
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
            "start": 697,
            "end": 741,
            "name": "props",
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
                      "name": "ButtonProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 718,
                    "end": 727,
                    "typeName": {
                      "type": "Identifier",
                      "start": 718,
                      "end": 727,
                      "name": "LinkProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 730,
                    "end": 741,
                    "typeName": {
                      "type": "Identifier",
                      "start": 730,
                      "end": 741,
                      "name": "HyphenProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                  "id": {
                    "type": "Identifier",
                    "start": 768,
                    "end": 777,
                    "name": "linkProps",
                    "typeAnnotation": null,
                    "decorators": [],
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
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
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
                        "name": "LinkProps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "IfStatement",
              "start": 804,
              "end": 871,
              "test": {
                "type": "MemberExpression",
                "start": 807,
                "end": 819,
                "object": {
                  "type": "Identifier",
                  "start": 807,
                  "end": 816,
                  "name": "linkProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 817,
                  "end": 819,
                  "name": "to",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 838,
                        "end": 857,
                        "object": {
                          "type": "ThisExpression",
                          "start": 838,
                          "end": 842
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 843,
                          "end": 857,
                          "name": "_buildMainLink",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 858,
                          "end": 863,
                          "name": "props",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "start": 877,
              "end": 913,
              "argument": {
                "type": "CallExpression",
                "start": 884,
                "end": 912,
                "callee": {
                  "type": "MemberExpression",
                  "start": 884,
                  "end": 905,
                  "object": {
                    "type": "ThisExpression",
                    "start": 884,
                    "end": 888
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 889,
                    "end": 905,
                    "name": "_buildMainButton",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 906,
                    "end": 911,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
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
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 748,
                "end": 755,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 929,
            "end": 931,
            "name": "b0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 934,
            "end": 977,
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
                    "value": "/some/path",
                    "raw": "'/some/path'"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 935,
                "end": 945,
                "name": "MainButton"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 962,
                "end": 964,
                "value": "GO",
                "raw": "GO"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 985,
            "end": 987,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 990,
            "end": 1046,
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
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1012,
                          "end": 1013,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1018,
                        "end": 1020,
                        "body": []
                      },
                      "typeParameters": null,
                      "returnType": null
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
              "selfClosing": false,
              "typeArguments": null
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 1022,
                "end": 1033,
                "value": "Hello world",
                "raw": "Hello world"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1054,
            "end": 1056,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1059,
            "end": 1082,
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
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1090,
            "end": 1092,
            "name": "b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1095,
            "end": 1135,
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1112,
                          "end": 1114,
                          "name": "to",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1116,
                          "end": 1121,
                          "value": 10000,
                          "raw": "10000"
                        },
                        "kind": "init",
                        "optional": false
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
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1143,
            "end": 1145,
            "name": "b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1148,
            "end": 1172,
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
                    "name": "obj1",
                    "typeAnnotation": null,
                    "decorators": [],
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1218,
            "end": 1220,
            "name": "b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1223,
            "end": 1266,
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
                    "name": "obj1",
                    "typeAnnotation": null,
                    "decorators": [],
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
                    "value": "/to/somewhere",
                    "raw": "\"/to/somewhere\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1224,
                "end": 1234,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1310,
            "end": 1312,
            "name": "b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1315,
            "end": 1339,
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
                    "name": "obj2",
                    "typeAnnotation": null,
                    "decorators": [],
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1347,
            "end": 1349,
            "name": "b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1352,
            "end": 1410,
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1369,
                          "end": 1376,
                          "name": "onClick",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 1378,
                          "end": 1405,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1386,
                                    "end": 1397,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1386,
                                      "end": 1393,
                                      "name": "console",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1394,
                                      "end": 1397,
                                      "name": "log",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 1398,
                                      "end": 1402,
                                      "value": "hi",
                                      "raw": "\"hi\""
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "directive": null
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
                        "optional": false
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1418,
            "end": 1420,
            "name": "b8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1423,
            "end": 1457,
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
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1440,
                          "end": 1447,
                          "name": "onClick",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 1447,
                          "end": 1452,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 1450,
                            "end": 1452,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
                        "optional": false
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1525,
            "end": 1527,
            "name": "b9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1530,
            "end": 1584,
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
                    "value": "/some/path",
                    "raw": "'/some/path'"
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
              "selfClosing": false,
              "typeArguments": null
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 1569,
                "end": 1571,
                "value": "GO",
                "raw": "GO"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1592,
            "end": 1595,
            "name": "b10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1598,
            "end": 1654,
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
                    "value": "/some/path",
                    "raw": "'/some/path'"
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
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1599,
                "end": 1609,
                "name": "MainButton"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1662,
            "end": 1665,
            "name": "b11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1668,
            "end": 1754,
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
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1690,
                          "end": 1691,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1696,
                        "end": 1698,
                        "body": []
                      },
                      "typeParameters": null,
                      "returnType": null
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
                    "value": "hello",
                    "raw": "\"hello\""
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
              "selfClosing": false,
              "typeArguments": null
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 1730,
                "end": 1741,
                "value": "Hello world",
                "raw": "Hello world"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1762,
            "end": 1765,
            "name": "b12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1768,
            "end": 1808,
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
                    "value": "Hello world",
                    "raw": "\"Hello world\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1769,
                "end": 1779,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
