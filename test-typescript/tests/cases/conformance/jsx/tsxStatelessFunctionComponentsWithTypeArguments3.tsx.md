__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1069,
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
      "type": "TSDeclareFunction",
      "start": 33,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 67,
        "name": "OverloadComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 69,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 72,
        "end": 85,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 74,
          "end": 85,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 74,
            "end": 85,
            "left": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 78,
              "end": 85,
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
    {
      "type": "TSDeclareFunction",
      "start": 87,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 121,
        "name": "OverloadComponent",
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
          "start": 125,
          "end": 173,
          "name": "attr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 129,
            "end": 173,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 131,
              "end": 173,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 132,
                  "end": 137,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 135,
                      "end": 136,
                      "typeName": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 138,
                  "end": 149,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 148,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 142,
                      "end": 148
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 150,
                  "end": 172,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 150,
                    "end": 163,
                    "value": "ignore-prop",
                    "raw": "\"ignore-prop\""
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 163,
                    "end": 172,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 165,
                      "end": 172
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 121,
        "end": 124,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 122,
            "end": 123,
            "name": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 174,
        "end": 187,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 176,
          "end": 187,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 176,
            "end": 187,
            "left": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 180,
              "end": 187,
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
    {
      "type": "TSDeclareFunction",
      "start": 189,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 223,
        "name": "OverloadComponent",
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
          "start": 230,
          "end": 248,
          "name": "attr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 234,
            "end": 248,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 236,
              "end": 248,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 237,
                  "end": 242,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 238,
                    "end": 241,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 240,
                      "end": 241,
                      "typeName": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 241,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 243,
                  "end": 247,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 244,
                    "end": 247,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 246,
                      "end": 247,
                      "typeName": {
                        "type": "Identifier",
                        "start": 246,
                        "end": 247,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 223,
        "end": 229,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 224,
            "end": 225,
            "name": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 227,
            "end": 228,
            "name": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 249,
        "end": 262,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 251,
          "end": 262,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 251,
            "end": 262,
            "left": {
              "type": "Identifier",
              "start": 251,
              "end": 254,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 255,
              "end": 262,
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
    {
      "type": "FunctionDeclaration",
      "start": 271,
      "end": 785,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 283,
        "name": "Baz",
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
          "start": 341,
          "end": 348,
          "name": "arg1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 345,
            "end": 348,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 347,
              "end": 348,
              "typeName": {
                "type": "Identifier",
                "start": 347,
                "end": 348,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 350,
          "end": 357,
          "name": "arg2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 354,
            "end": 357,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 356,
              "end": 357,
              "typeName": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
                "name": "U",
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
        "start": 359,
        "end": 785,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 365,
            "end": 428,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 369,
                "end": 427,
                "id": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 371,
                  "name": "a0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 374,
                  "end": 427,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 374,
                    "end": 427,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 393,
                        "end": 402,
                        "argument": {
                          "type": "Identifier",
                          "start": 397,
                          "end": 401,
                          "name": "arg1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 403,
                        "end": 412,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 403,
                          "end": 404,
                          "name": "a"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 405,
                          "end": 412,
                          "value": "hello",
                          "raw": "\"hello\""
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 413,
                        "end": 424,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 413,
                          "end": 424,
                          "name": "ignore-prop"
                        },
                        "value": null
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 375,
                      "end": 392,
                      "name": "OverloadComponent"
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 433,
            "end": 499,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 437,
                "end": 498,
                "id": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 439,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 442,
                  "end": 498,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 442,
                    "end": 498,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 461,
                        "end": 470,
                        "argument": {
                          "type": "Identifier",
                          "start": 465,
                          "end": 469,
                          "name": "arg2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 471,
                        "end": 495,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 471,
                          "end": 481,
                          "name": "ignore-pro"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 482,
                          "end": 495,
                          "value": "hello world",
                          "raw": "\"hello world\""
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 443,
                      "end": 460,
                      "name": "OverloadComponent"
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 504,
            "end": 545,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 508,
                "end": 544,
                "id": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 510,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 513,
                  "end": 544,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 513,
                    "end": 544,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 532,
                        "end": 541,
                        "argument": {
                          "type": "Identifier",
                          "start": 536,
                          "end": 540,
                          "name": "arg2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 514,
                      "end": 531,
                      "name": "OverloadComponent"
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 550,
            "end": 603,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 554,
                "end": 602,
                "id": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 556,
                  "name": "a3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 559,
                  "end": 602,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 559,
                    "end": 602,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 578,
                        "end": 587,
                        "argument": {
                          "type": "Identifier",
                          "start": 582,
                          "end": 586,
                          "name": "arg1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 588,
                        "end": 599,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 588,
                          "end": 599,
                          "name": "ignore-prop"
                        },
                        "value": null
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 560,
                      "end": 577,
                      "name": "OverloadComponent"
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 608,
            "end": 639,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 612,
                "end": 638,
                "id": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 614,
                  "name": "a4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 617,
                  "end": 638,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 617,
                    "end": 638,
                    "attributes": [],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 618,
                      "end": 635,
                      "name": "OverloadComponent"
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 644,
            "end": 715,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 648,
                "end": 714,
                "id": {
                  "type": "Identifier",
                  "start": 648,
                  "end": 650,
                  "name": "a5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 653,
                  "end": 714,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 653,
                    "end": 714,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 672,
                        "end": 681,
                        "argument": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 680,
                          "name": "arg2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 682,
                        "end": 701,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 682,
                          "end": 693,
                          "name": "ignore-prop"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 694,
                          "end": 701,
                          "value": "hello",
                          "raw": "\"hello\""
                        }
                      },
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 702,
                        "end": 711,
                        "argument": {
                          "type": "Identifier",
                          "start": 706,
                          "end": 710,
                          "name": "arg1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 654,
                      "end": 671,
                      "name": "OverloadComponent"
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 720,
            "end": 783,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 724,
                "end": 782,
                "id": {
                  "type": "Identifier",
                  "start": 724,
                  "end": 726,
                  "name": "a6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 729,
                  "end": 782,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 729,
                    "end": 782,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 748,
                        "end": 757,
                        "argument": {
                          "type": "Identifier",
                          "start": 752,
                          "end": 756,
                          "name": "arg2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 758,
                        "end": 769,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 758,
                          "end": 769,
                          "name": "ignore-prop"
                        },
                        "value": null
                      },
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 770,
                        "end": 779,
                        "argument": {
                          "type": "Identifier",
                          "start": 774,
                          "end": 778,
                          "name": "arg1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 730,
                      "end": 747,
                      "name": "OverloadComponent"
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
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 283,
        "end": 340,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 284,
            "end": 305,
            "name": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 294,
              "end": 305,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 295,
                  "end": 304,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 296,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 296,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 298,
                      "end": 304
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 307,
            "end": 339,
            "name": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 317,
              "end": 339,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 318,
                  "end": 329,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 319,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 319,
                    "end": 328,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 321,
                      "end": 328
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 330,
                  "end": 338,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 331,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 331,
                    "end": 338,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 332,
                      "end": 338
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
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
      "type": "TSDeclareFunction",
      "start": 787,
      "end": 852,
      "id": {
        "type": "Identifier",
        "start": 804,
        "end": 808,
        "name": "Link",
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
          "start": 812,
          "end": 837,
          "name": "l",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 813,
            "end": 837,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 815,
              "end": 837,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 816,
                  "end": 836,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 816,
                    "end": 820,
                    "name": "func",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 820,
                    "end": 836,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 822,
                      "end": 836,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 823,
                          "end": 829,
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 826,
                            "end": 829,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 828,
                              "end": 829,
                              "typeName": {
                                "type": "Identifier",
                                "start": 828,
                                "end": 829,
                                "name": "U",
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 830,
                        "end": 836,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 832,
                          "end": 836
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 808,
        "end": 811,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 809,
            "end": 810,
            "name": {
              "type": "Identifier",
              "start": 809,
              "end": 810,
              "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 838,
        "end": 851,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 840,
          "end": 851,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 840,
            "end": 851,
            "left": {
              "type": "Identifier",
              "start": 840,
              "end": 843,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 844,
              "end": 851,
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
    {
      "type": "TSDeclareFunction",
      "start": 853,
      "end": 932,
      "id": {
        "type": "Identifier",
        "start": 870,
        "end": 874,
        "name": "Link",
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
          "start": 878,
          "end": 917,
          "name": "l",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 879,
            "end": 917,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 881,
              "end": 917,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 882,
                  "end": 916,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 882,
                    "end": 886,
                    "name": "func",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 886,
                    "end": 916,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 888,
                      "end": 916,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 889,
                          "end": 895,
                          "name": "arg1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 893,
                            "end": 895,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 894,
                              "end": 895,
                              "typeName": {
                                "type": "Identifier",
                                "start": 894,
                                "end": 895,
                                "name": "U",
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
                        {
                          "type": "Identifier",
                          "start": 897,
                          "end": 909,
                          "name": "arg2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 901,
                            "end": 909,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 903,
                              "end": 909
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 910,
                        "end": 916,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 912,
                          "end": 916
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 874,
        "end": 877,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 875,
            "end": 876,
            "name": {
              "type": "Identifier",
              "start": 875,
              "end": 876,
              "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 918,
        "end": 931,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 920,
          "end": 931,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 920,
            "end": 931,
            "left": {
              "type": "Identifier",
              "start": 920,
              "end": 923,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 924,
              "end": 931,
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
    {
      "type": "FunctionDeclaration",
      "start": 933,
      "end": 1069,
      "id": {
        "type": "Identifier",
        "start": 942,
        "end": 952,
        "name": "createLink",
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
          "start": 953,
          "end": 976,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 957,
            "end": 976,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 959,
              "end": 976,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 960,
                  "end": 969,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 961,
                    "end": 969,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 963,
                      "end": 969
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 970,
                "end": 976,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 972,
                  "end": 976
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 978,
        "end": 1069,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 984,
            "end": 1012,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 988,
                "end": 1012,
                "id": {
                  "type": "Identifier",
                  "start": 988,
                  "end": 989,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 992,
                  "end": 1012,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 992,
                    "end": 1012,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 998,
                        "end": 1009,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 998,
                          "end": 1002,
                          "name": "func"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 1003,
                          "end": 1009,
                          "expression": {
                            "type": "Identifier",
                            "start": 1004,
                            "end": 1008,
                            "name": "func",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 993,
                      "end": 997,
                      "name": "Link"
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1017,
            "end": 1067,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1021,
                "end": 1066,
                "id": {
                  "type": "Identifier",
                  "start": 1021,
                  "end": 1023,
                  "name": "o1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 1026,
                  "end": 1066,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 1026,
                    "end": 1066,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 1032,
                        "end": 1063,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 1032,
                          "end": 1036,
                          "name": "func"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 1037,
                          "end": 1063,
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "start": 1038,
                            "end": 1062,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1039,
                                "end": 1047,
                                "name": "a",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1040,
                                  "end": 1047,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1041,
                                    "end": 1047
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 1049,
                                "end": 1057,
                                "name": "b",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1050,
                                  "end": 1057,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1051,
                                    "end": 1057
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 1060,
                              "end": 1062,
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
                      "start": 1027,
                      "end": 1031,
                      "name": "Link"
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
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
