__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1689,
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
      "type": "TSDeclareFunction",
      "start": 32,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 57,
        "decorators": [],
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 59,
        "end": 72,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 61,
          "end": 72,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 61,
            "end": 72,
            "left": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 65,
              "end": 72,
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
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 99,
        "decorators": [],
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 100,
          "end": 128,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 101,
            "end": 128,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 103,
              "end": 128,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 104,
                  "end": 115,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 106,
                    "decorators": [],
                    "name": "yy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 106,
                    "end": 114,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 108,
                      "end": 114
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 116,
                  "end": 127,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 119,
                    "decorators": [],
                    "name": "yy1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 127,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 121,
                      "end": 127
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 129,
        "end": 142,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 131,
          "end": 142,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 131,
            "end": 142,
            "left": {
              "type": "Identifier",
              "start": 131,
              "end": 134,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 135,
              "end": 142,
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
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 187,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 152,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 155,
            "end": 187,
            "properties": [
              {
                "type": "Property",
                "start": 161,
                "end": 167,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 163,
                  "decorators": [],
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 165,
                  "end": 167,
                  "value": 10,
                  "raw": "10"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 173,
                "end": 185,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 176,
                  "decorators": [],
                  "name": "yy1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 178,
                  "end": 185,
                  "value": "hello",
                  "raw": "\"hello\""
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
      "start": 188,
      "end": 202,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 201,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 201,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 198,
                "end": 201
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
      "start": 213,
      "end": 247,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 246,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 221,
            "decorators": [],
            "name": "c0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 224,
            "end": 246,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 224,
              "end": 246,
              "name": {
                "type": "JSXIdentifier",
                "start": 225,
                "end": 233,
                "name": "OneThing"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 234,
                  "end": 243,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 234,
                    "end": 243,
                    "name": "extraProp"
                  },
                  "value": null
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
      "start": 268,
      "end": 299,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 276,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 279,
            "end": 298,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 279,
              "end": 298,
              "name": {
                "type": "JSXIdentifier",
                "start": 280,
                "end": 288,
                "name": "OneThing"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 289,
                  "end": 296,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 289,
                    "end": 291,
                    "name": "yy"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 292,
                    "end": 296,
                    "expression": {
                      "type": "Literal",
                      "start": 293,
                      "end": 295,
                      "value": 10,
                      "raw": "10"
                    }
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
      "start": 322,
      "end": 359,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 358,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 330,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 333,
            "end": 358,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 333,
              "end": 358,
              "name": {
                "type": "JSXIdentifier",
                "start": 334,
                "end": 342,
                "name": "OneThing"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 343,
                  "end": 351,
                  "argument": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 350,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 352,
                  "end": 355,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 352,
                    "end": 355,
                    "name": "yy1"
                  },
                  "value": null
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
      "start": 382,
      "end": 442,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 441,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 390,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 393,
            "end": 441,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 393,
              "end": 441,
              "name": {
                "type": "JSXIdentifier",
                "start": 394,
                "end": 402,
                "name": "OneThing"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 403,
                  "end": 411,
                  "argument": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 410,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 412,
                  "end": 438,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 416,
                    "end": 437,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 417,
                        "end": 436,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 417,
                          "end": 422,
                          "decorators": [],
                          "name": "extra",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 424,
                          "end": 436,
                          "value": "extra attr",
                          "raw": "\"extra attr\""
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
      "start": 492,
      "end": 536,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 498,
          "end": 535,
          "id": {
            "type": "Identifier",
            "start": 498,
            "end": 500,
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 503,
            "end": 535,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 503,
              "end": 535,
              "name": {
                "type": "JSXIdentifier",
                "start": 504,
                "end": 512,
                "name": "OneThing"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 513,
                  "end": 521,
                  "argument": {
                    "type": "Identifier",
                    "start": 517,
                    "end": 520,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 522,
                  "end": 532,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 522,
                    "end": 524,
                    "name": "y1"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 525,
                    "end": 532,
                    "expression": {
                      "type": "Literal",
                      "start": 526,
                      "end": 531,
                      "value": 10000,
                      "raw": "10000"
                    }
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
      "start": 557,
      "end": 606,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 563,
          "end": 605,
          "id": {
            "type": "Identifier",
            "start": 563,
            "end": 565,
            "decorators": [],
            "name": "c5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 568,
            "end": 605,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 568,
              "end": 605,
              "name": {
                "type": "JSXIdentifier",
                "start": 569,
                "end": 577,
                "name": "OneThing"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 578,
                  "end": 586,
                  "argument": {
                    "type": "Identifier",
                    "start": 582,
                    "end": 585,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 587,
                  "end": 602,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 591,
                    "end": 601,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 592,
                        "end": 600,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 592,
                          "end": 594,
                          "decorators": [],
                          "name": "yy",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 596,
                          "end": 600,
                          "value": true,
                          "raw": "true"
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
      "start": 630,
      "end": 691,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 636,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 636,
            "end": 638,
            "decorators": [],
            "name": "c6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 641,
            "end": 690,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 641,
              "end": 690,
              "name": {
                "type": "JSXIdentifier",
                "start": 642,
                "end": 650,
                "name": "OneThing"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 651,
                  "end": 660,
                  "argument": {
                    "type": "Identifier",
                    "start": 655,
                    "end": 659,
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 661,
                  "end": 687,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 665,
                    "end": 686,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 666,
                        "end": 685,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 666,
                          "end": 671,
                          "decorators": [],
                          "name": "extra",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 673,
                          "end": 685,
                          "value": "extra attr",
                          "raw": "\"extra attr\""
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
      "start": 779,
      "end": 816,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 785,
          "end": 815,
          "id": {
            "type": "Identifier",
            "start": 785,
            "end": 787,
            "decorators": [],
            "name": "c7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 790,
            "end": 815,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 790,
              "end": 815,
              "name": {
                "type": "JSXIdentifier",
                "start": 791,
                "end": 799,
                "name": "OneThing"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 800,
                  "end": 809,
                  "argument": {
                    "type": "Identifier",
                    "start": 804,
                    "end": 808,
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 810,
                  "end": 812,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 810,
                    "end": 812,
                    "name": "yy"
                  },
                  "value": null
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
      "type": "TSDeclareFunction",
      "start": 905,
      "end": 978,
      "id": {
        "type": "Identifier",
        "start": 922,
        "end": 937,
        "decorators": [],
        "name": "TestingOneThing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 938,
          "end": 963,
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 939,
            "end": 963,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 941,
              "end": 963,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 942,
                  "end": 962,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 942,
                    "end": 954,
                    "value": "extra-data",
                    "raw": "\"extra-data\""
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 954,
                    "end": 962,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 956,
                      "end": 962
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 964,
        "end": 977,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 966,
          "end": 977,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 966,
            "end": 977,
            "left": {
              "type": "Identifier",
              "start": 966,
              "end": 969,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 970,
              "end": 977,
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
    {
      "type": "TSDeclareFunction",
      "start": 979,
      "end": 1062,
      "id": {
        "type": "Identifier",
        "start": 996,
        "end": 1011,
        "decorators": [],
        "name": "TestingOneThing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1012,
          "end": 1047,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1013,
            "end": 1047,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1015,
              "end": 1047,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1016,
                  "end": 1027,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1016,
                    "end": 1018,
                    "decorators": [],
                    "name": "yy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1018,
                    "end": 1026,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1020,
                      "end": 1026
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1028,
                  "end": 1046,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1028,
                    "end": 1037,
                    "decorators": [],
                    "name": "direction",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1038,
                    "end": 1046,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1040,
                      "end": 1046
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1048,
        "end": 1061,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1050,
          "end": 1061,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 1050,
            "end": 1061,
            "left": {
              "type": "Identifier",
              "start": 1050,
              "end": 1053,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1054,
              "end": 1061,
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
    {
      "type": "VariableDeclaration",
      "start": 1073,
      "end": 1114,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1079,
          "end": 1114,
          "id": {
            "type": "Identifier",
            "start": 1079,
            "end": 1081,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1084,
            "end": 1114,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1084,
              "end": 1114,
              "name": {
                "type": "JSXIdentifier",
                "start": 1085,
                "end": 1100,
                "name": "TestingOneThing"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1101,
                  "end": 1111,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1101,
                    "end": 1111,
                    "name": "extra-data"
                  },
                  "value": null
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
      "start": 1115,
      "end": 1173,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1121,
          "end": 1173,
          "id": {
            "type": "Identifier",
            "start": 1121,
            "end": 1123,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1126,
            "end": 1173,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1126,
              "end": 1173,
              "name": {
                "type": "JSXIdentifier",
                "start": 1127,
                "end": 1142,
                "name": "TestingOneThing"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1143,
                  "end": 1153,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1143,
                    "end": 1145,
                    "name": "yy"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1146,
                    "end": 1153,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1154,
                  "end": 1170,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1154,
                    "end": 1163,
                    "name": "direction"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1164,
                    "end": 1170,
                    "value": "left",
                    "raw": "\"left\""
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
      "type": "TSDeclareFunction",
      "start": 1175,
      "end": 1252,
      "id": {
        "type": "Identifier",
        "start": 1192,
        "end": 1207,
        "decorators": [],
        "name": "TestingOptional",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1208,
          "end": 1237,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1209,
            "end": 1237,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1211,
              "end": 1237,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1212,
                  "end": 1224,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1212,
                    "end": 1214,
                    "decorators": [],
                    "name": "y1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1215,
                    "end": 1223,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1217,
                      "end": 1223
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1225,
                  "end": 1236,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1225,
                    "end": 1227,
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1228,
                    "end": 1236,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1230,
                      "end": 1236
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1238,
        "end": 1251,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1240,
          "end": 1251,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 1240,
            "end": 1251,
            "left": {
              "type": "Identifier",
              "start": 1240,
              "end": 1243,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1244,
              "end": 1251,
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
    {
      "type": "TSDeclareFunction",
      "start": 1253,
      "end": 1353,
      "id": {
        "type": "Identifier",
        "start": 1270,
        "end": 1285,
        "decorators": [],
        "name": "TestingOptional",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1286,
          "end": 1338,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1287,
            "end": 1338,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1289,
              "end": 1338,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1290,
                  "end": 1302,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1290,
                    "end": 1292,
                    "decorators": [],
                    "name": "y1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1293,
                    "end": 1301,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1295,
                      "end": 1301
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1303,
                  "end": 1315,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1303,
                    "end": 1305,
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1306,
                    "end": 1314,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1308,
                      "end": 1314
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1316,
                  "end": 1337,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1316,
                    "end": 1324,
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1324,
                    "end": 1337,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1326,
                      "end": 1337,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 1326,
                        "end": 1337,
                        "left": {
                          "type": "Identifier",
                          "start": 1326,
                          "end": 1329,
                          "decorators": [],
                          "name": "JSX",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1330,
                          "end": 1337,
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1339,
        "end": 1352,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1341,
          "end": 1352,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 1341,
            "end": 1352,
            "left": {
              "type": "Identifier",
              "start": 1341,
              "end": 1344,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1345,
              "end": 1352,
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
    {
      "type": "TSDeclareFunction",
      "start": 1354,
      "end": 1444,
      "id": {
        "type": "Identifier",
        "start": 1371,
        "end": 1386,
        "decorators": [],
        "name": "TestingOptional",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1387,
          "end": 1429,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1388,
            "end": 1429,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1390,
              "end": 1429,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1391,
                  "end": 1403,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1391,
                    "end": 1393,
                    "decorators": [],
                    "name": "y1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1393,
                    "end": 1402,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1395,
                      "end": 1402
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1404,
                  "end": 1416,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1404,
                    "end": 1406,
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1407,
                    "end": 1415,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1409,
                      "end": 1415
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1417,
                  "end": 1428,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1417,
                    "end": 1419,
                    "decorators": [],
                    "name": "y3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1419,
                    "end": 1428,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1421,
                      "end": 1428
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1430,
        "end": 1443,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1432,
          "end": 1443,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 1432,
            "end": 1443,
            "left": {
              "type": "Identifier",
              "start": 1432,
              "end": 1435,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1436,
              "end": 1443,
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
    {
      "type": "VariableDeclaration",
      "start": 1455,
      "end": 1498,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1461,
          "end": 1498,
          "id": {
            "type": "Identifier",
            "start": 1461,
            "end": 1463,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1466,
            "end": 1498,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1466,
              "end": 1498,
              "name": {
                "type": "JSXIdentifier",
                "start": 1467,
                "end": 1482,
                "name": "TestingOptional"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1483,
                  "end": 1485,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1483,
                    "end": 1485,
                    "name": "y1"
                  },
                  "value": null
                },
                {
                  "type": "JSXAttribute",
                  "start": 1486,
                  "end": 1496,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1486,
                    "end": 1488,
                    "name": "y3"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1489,
                    "end": 1496,
                    "value": "hello",
                    "raw": "\"hello\""
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
      "start": 1499,
      "end": 1553,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1505,
          "end": 1553,
          "id": {
            "type": "Identifier",
            "start": 1505,
            "end": 1507,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1510,
            "end": 1553,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1510,
              "end": 1553,
              "name": {
                "type": "JSXIdentifier",
                "start": 1511,
                "end": 1526,
                "name": "TestingOptional"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1527,
                  "end": 1537,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1527,
                    "end": 1529,
                    "name": "y1"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1530,
                    "end": 1537,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1538,
                  "end": 1547,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1538,
                    "end": 1540,
                    "name": "y2"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 1541,
                    "end": 1547,
                    "expression": {
                      "type": "Literal",
                      "start": 1542,
                      "end": 1546,
                      "value": 1000,
                      "raw": "1000"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1548,
                  "end": 1550,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1548,
                    "end": 1550,
                    "name": "y3"
                  },
                  "value": null
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
      "start": 1554,
      "end": 1619,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1560,
          "end": 1619,
          "id": {
            "type": "Identifier",
            "start": 1560,
            "end": 1562,
            "decorators": [],
            "name": "e3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1565,
            "end": 1619,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1565,
              "end": 1619,
              "name": {
                "type": "JSXIdentifier",
                "start": 1566,
                "end": 1581,
                "name": "TestingOptional"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1582,
                  "end": 1592,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1582,
                    "end": 1584,
                    "name": "y1"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1585,
                    "end": 1592,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1593,
                  "end": 1602,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1593,
                    "end": 1595,
                    "name": "y2"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 1596,
                    "end": 1602,
                    "expression": {
                      "type": "Literal",
                      "start": 1597,
                      "end": 1601,
                      "value": 1000,
                      "raw": "1000"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1603,
                  "end": 1616,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1603,
                    "end": 1611,
                    "name": "children"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1612,
                    "end": 1616,
                    "value": "hi",
                    "raw": "\"hi\""
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
      "start": 1620,
      "end": 1689,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1626,
          "end": 1689,
          "id": {
            "type": "Identifier",
            "start": 1626,
            "end": 1628,
            "decorators": [],
            "name": "e4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1631,
            "end": 1689,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1631,
              "end": 1669,
              "name": {
                "type": "JSXIdentifier",
                "start": 1632,
                "end": 1647,
                "name": "TestingOptional"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1648,
                  "end": 1658,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1648,
                    "end": 1650,
                    "name": "y1"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1651,
                    "end": 1658,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1659,
                  "end": 1668,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1659,
                    "end": 1661,
                    "name": "y2"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 1662,
                    "end": 1668,
                    "expression": {
                      "type": "Literal",
                      "start": 1663,
                      "end": 1667,
                      "value": 1000,
                      "raw": "1000"
                    }
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 1669,
                "end": 1671,
                "value": "Hi",
                "raw": "Hi"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 1671,
              "end": 1689,
              "name": {
                "type": "JSXIdentifier",
                "start": 1673,
                "end": 1688,
                "name": "TestingOptional"
              }
            }
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
