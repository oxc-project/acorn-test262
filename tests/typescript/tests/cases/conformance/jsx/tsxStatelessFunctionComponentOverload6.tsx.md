__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1810,
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
          "decorators": [],
          "name": "ClickableProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "className",
                "optional": false,
                "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "ButtonProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
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
                "decorators": [],
                "name": "onClick",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 207,
                      "decorators": [],
                      "name": "MouseEventHandler",
                      "optional": false,
                      "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "LinkProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
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
                "decorators": [],
                "name": "to",
                "optional": false,
                "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "HyphenProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 372,
      "end": 419,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 419,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 379,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 396,
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 398,
                  "end": 402,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 408,
                "end": 417,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 410,
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 412,
                  "end": 417,
                  "value": "boo",
                  "raw": "\"boo\""
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
    },
    {
      "type": "VariableDeclaration",
      "start": 420,
      "end": 434,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 433,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 435,
      "end": 471,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 439,
          "end": 471,
          "id": {
            "type": "Identifier",
            "start": 439,
            "end": 443,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 452,
                  "end": 459,
                  "decorators": [],
                  "name": "onClick",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 461,
                  "end": 469,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 467,
                    "end": 469,
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
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 531,
                "end": 538,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 594,
                "end": 601,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 661,
                "end": 668,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "LinkProps",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "HyphenProps",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 748,
                "end": 755,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 756,
          "end": 915,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 762,
              "end": 799,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 768,
                  "end": 798,
                  "id": {
                    "type": "Identifier",
                    "start": 768,
                    "end": 777,
                    "decorators": [],
                    "name": "linkProps",
                    "optional": false,
                    "typeAnnotation": null
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
                      "optional": false,
                      "typeAnnotation": null
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "definite": false
                }
              ],
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
                  "decorators": [],
                  "name": "linkProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 817,
                  "end": 819,
                  "decorators": [],
                  "name": "to",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                          "decorators": [],
                          "name": "_buildMainLink",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 858,
                          "end": 863,
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
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
                    "decorators": [],
                    "name": "_buildMainButton",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 906,
                    "end": 911,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 923,
      "end": 978,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 929,
          "end": 977,
          "id": {
            "type": "Identifier",
            "start": 929,
            "end": 931,
            "decorators": [],
            "name": "b0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 934,
            "end": 977,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 934,
              "end": 962,
              "name": {
                "type": "JSXIdentifier",
                "start": 935,
                "end": 945,
                "name": "MainButton"
              },
              "typeArguments": null,
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
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 962,
                "end": 964,
                "value": "GO",
                "raw": "GO"
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 979,
      "end": 1047,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 985,
          "end": 1046,
          "id": {
            "type": "Identifier",
            "start": 985,
            "end": 987,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 990,
            "end": 1046,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 990,
              "end": 1022,
              "name": {
                "type": "JSXIdentifier",
                "start": 991,
                "end": 1001,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1012,
                          "end": 1013,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1018,
                        "end": 1020,
                        "body": []
                      },
                      "id": null,
                      "generator": false
                    }
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 1022,
                "end": 1033,
                "value": "Hello world",
                "raw": "Hello world"
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1048,
      "end": 1083,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1054,
          "end": 1082,
          "id": {
            "type": "Identifier",
            "start": 1054,
            "end": 1056,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1059,
            "end": 1082,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1059,
              "end": 1082,
              "name": {
                "type": "JSXIdentifier",
                "start": 1060,
                "end": 1070,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 1084,
      "end": 1136,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1090,
          "end": 1135,
          "id": {
            "type": "Identifier",
            "start": 1090,
            "end": 1092,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1095,
            "end": 1135,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1095,
              "end": 1135,
              "name": {
                "type": "JSXIdentifier",
                "start": 1096,
                "end": 1106,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1112,
                          "end": 1114,
                          "decorators": [],
                          "name": "to",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1116,
                          "end": 1121,
                          "value": 10000,
                          "raw": "10000"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
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
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 1137,
      "end": 1173,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1143,
          "end": 1172,
          "id": {
            "type": "Identifier",
            "start": 1143,
            "end": 1145,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1148,
            "end": 1172,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1148,
              "end": 1172,
              "name": {
                "type": "JSXIdentifier",
                "start": 1149,
                "end": 1159,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 1212,
      "end": 1267,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1218,
          "end": 1266,
          "id": {
            "type": "Identifier",
            "start": 1218,
            "end": 1220,
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1223,
            "end": 1266,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1223,
              "end": 1266,
              "name": {
                "type": "JSXIdentifier",
                "start": 1224,
                "end": 1234,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 1304,
      "end": 1340,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1310,
          "end": 1339,
          "id": {
            "type": "Identifier",
            "start": 1310,
            "end": 1312,
            "decorators": [],
            "name": "b6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1315,
            "end": 1339,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1315,
              "end": 1339,
              "name": {
                "type": "JSXIdentifier",
                "start": 1316,
                "end": 1326,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 1341,
      "end": 1411,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1347,
          "end": 1410,
          "id": {
            "type": "Identifier",
            "start": 1347,
            "end": 1349,
            "decorators": [],
            "name": "b7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1352,
            "end": 1410,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1352,
              "end": 1410,
              "name": {
                "type": "JSXIdentifier",
                "start": 1353,
                "end": 1363,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1369,
                          "end": 1376,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 1378,
                          "end": 1405,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1394,
                                      "end": 1397,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 1398,
                                      "end": 1402,
                                      "value": "hi",
                                      "raw": "\"hi\""
                                    }
                                  ],
                                  "optional": false
                                },
                                "directive": null
                              }
                            ]
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
      "start": 1412,
      "end": 1458,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1418,
          "end": 1457,
          "id": {
            "type": "Identifier",
            "start": 1418,
            "end": 1420,
            "decorators": [],
            "name": "b8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1423,
            "end": 1457,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1423,
              "end": 1457,
              "name": {
                "type": "JSXIdentifier",
                "start": 1424,
                "end": 1434,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1440,
                          "end": 1447,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 1447,
                          "end": 1452,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1450,
                            "end": 1452,
                            "body": []
                          },
                          "expression": false
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
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
      "start": 1519,
      "end": 1585,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1525,
          "end": 1584,
          "id": {
            "type": "Identifier",
            "start": 1525,
            "end": 1527,
            "decorators": [],
            "name": "b9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1530,
            "end": 1584,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1530,
              "end": 1569,
              "name": {
                "type": "JSXIdentifier",
                "start": 1531,
                "end": 1541,
                "name": "MainButton"
              },
              "typeArguments": null,
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
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 1569,
                "end": 1571,
                "value": "GO",
                "raw": "GO"
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1586,
      "end": 1655,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1592,
          "end": 1654,
          "id": {
            "type": "Identifier",
            "start": 1592,
            "end": 1595,
            "decorators": [],
            "name": "b10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1598,
            "end": 1654,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1598,
              "end": 1641,
              "name": {
                "type": "JSXIdentifier",
                "start": 1599,
                "end": 1609,
                "name": "MainButton"
              },
              "typeArguments": null,
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
              "selfClosing": false
            },
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1656,
      "end": 1755,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1662,
          "end": 1754,
          "id": {
            "type": "Identifier",
            "start": 1662,
            "end": 1665,
            "decorators": [],
            "name": "b11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1668,
            "end": 1754,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1668,
              "end": 1730,
              "name": {
                "type": "JSXIdentifier",
                "start": 1669,
                "end": 1679,
                "name": "MainButton"
              },
              "typeArguments": null,
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
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1690,
                          "end": 1691,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1696,
                        "end": 1698,
                        "body": []
                      },
                      "id": null,
                      "generator": false
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
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 1730,
                "end": 1741,
                "value": "Hello world",
                "raw": "Hello world"
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1756,
      "end": 1808,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1762,
          "end": 1808,
          "id": {
            "type": "Identifier",
            "start": 1762,
            "end": 1765,
            "decorators": [],
            "name": "b12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1768,
            "end": 1808,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1768,
              "end": 1808,
              "name": {
                "type": "JSXIdentifier",
                "start": 1769,
                "end": 1779,
                "name": "MainButton"
              },
              "typeArguments": null,
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
  "sourceType": "module",
  "hashbang": null
}
```
