overloadingOnConstants1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 868,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 24,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 22,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 22,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 19,
                "end": 22,
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 66,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 66,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 64,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 64,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 64,
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 39,
        "decorators": [],
        "name": "Derived1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 48,
        "end": 52,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 67,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 106,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 106,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 106,
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 81,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 90,
        "end": 94,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 148,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "biz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 148,
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 123,
        "decorators": [],
        "name": "Derived3",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 132,
        "end": 136,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 152,
      "end": 356,
      "body": {
        "type": "TSInterfaceBody",
        "start": 172,
        "end": 356,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 178,
            "end": 221,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 191,
              "decorators": [],
              "name": "createElement",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 192,
                "end": 209,
                "decorators": [],
                "name": "tagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 199,
                  "end": 209,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 201,
                    "end": 209,
                    "literal": {
                      "type": "Literal",
                      "start": 201,
                      "end": 209,
                      "raw": "'canvas'",
                      "value": "canvas"
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 212,
                "end": 220,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 220,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 226,
            "end": 266,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 239,
              "decorators": [],
              "name": "createElement",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 240,
                "end": 254,
                "decorators": [],
                "name": "tagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 247,
                  "end": 254,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 249,
                    "end": 254,
                    "literal": {
                      "type": "Literal",
                      "start": 249,
                      "end": 254,
                      "raw": "'div'",
                      "value": "div"
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 265,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 257,
                "end": 265,
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 265,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 271,
            "end": 312,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 284,
              "decorators": [],
              "name": "createElement",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 285,
                "end": 300,
                "decorators": [],
                "name": "tagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 292,
                  "end": 300,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 294,
                    "end": 300,
                    "literal": {
                      "type": "Literal",
                      "start": 294,
                      "end": 300,
                      "raw": "'span'",
                      "value": "span"
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 301,
              "end": 311,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 303,
                "end": 311,
                "typeName": {
                  "type": "Identifier",
                  "start": 303,
                  "end": 311,
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 317,
            "end": 354,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 330,
              "decorators": [],
              "name": "createElement",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 331,
                "end": 346,
                "decorators": [],
                "name": "tagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 338,
                  "end": 346,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 340,
                    "end": 346
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 347,
              "end": 353,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 349,
                "end": 353,
                "typeName": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 353,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 171,
        "decorators": [],
        "name": "Document2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 358,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 362,
          "end": 375,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 362,
            "end": 375,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 375,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 366,
                "end": 375,
                "typeName": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 375,
                  "decorators": [],
                  "name": "Document2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 440,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 440,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 415,
            "decorators": [],
            "name": "htmlElement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 409,
              "end": 415,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 411,
                "end": 415,
                "typeName": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 415,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 418,
            "end": 440,
            "arguments": [
              {
                "type": "Literal",
                "start": 435,
                "end": 439,
                "raw": "\"yo\"",
                "value": "yo"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 418,
              "end": 434,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 418,
                "end": 420,
                "decorators": [],
                "name": "d2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 421,
                "end": 434,
                "decorators": [],
                "name": "createElement",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 441,
      "end": 502,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 501,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 472,
            "decorators": [],
            "name": "htmlCanvasElement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 472,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 464,
                "end": 472,
                "typeName": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 472,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 475,
            "end": 501,
            "arguments": [
              {
                "type": "Literal",
                "start": 492,
                "end": 500,
                "raw": "\"canvas\"",
                "value": "canvas"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 475,
              "end": 491,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 475,
                "end": 477,
                "decorators": [],
                "name": "d2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 478,
                "end": 491,
                "decorators": [],
                "name": "createElement",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 503,
      "end": 558,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 557,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 531,
            "decorators": [],
            "name": "htmlDivElement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 521,
              "end": 531,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 523,
                "end": 531,
                "typeName": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 531,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 534,
            "end": 557,
            "arguments": [
              {
                "type": "Literal",
                "start": 551,
                "end": 556,
                "raw": "\"div\"",
                "value": "div"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 534,
              "end": 550,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 534,
                "end": 536,
                "decorators": [],
                "name": "d2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 537,
                "end": 550,
                "decorators": [],
                "name": "createElement",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 559,
      "end": 616,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 563,
          "end": 615,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 563,
            "end": 588,
            "decorators": [],
            "name": "htmlSpanElement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 578,
              "end": 588,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 580,
                "end": 588,
                "typeName": {
                  "type": "Identifier",
                  "start": 580,
                  "end": 588,
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 591,
            "end": 615,
            "arguments": [
              {
                "type": "Literal",
                "start": 608,
                "end": 614,
                "raw": "\"span\"",
                "value": "span"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 591,
              "end": 607,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 591,
                "end": 593,
                "decorators": [],
                "name": "d2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 594,
                "end": 607,
                "decorators": [],
                "name": "createElement",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 638,
      "end": 689,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 642,
          "end": 689,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 642,
            "end": 664,
            "decorators": [],
            "name": "htmlElement2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 654,
              "end": 664,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 656,
                "end": 664,
                "typeName": {
                  "type": "Identifier",
                  "start": 656,
                  "end": 664,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 667,
            "end": 689,
            "arguments": [
              {
                "type": "Literal",
                "start": 684,
                "end": 688,
                "raw": "\"yo\"",
                "value": "yo"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 667,
              "end": 683,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 667,
                "end": 669,
                "decorators": [],
                "name": "d2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 670,
                "end": 683,
                "decorators": [],
                "name": "createElement",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 690,
      "end": 752,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 694,
          "end": 751,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 694,
            "end": 722,
            "decorators": [],
            "name": "htmlCanvasElement2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 712,
              "end": 722,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 714,
                "end": 722,
                "typeName": {
                  "type": "Identifier",
                  "start": 714,
                  "end": 722,
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 725,
            "end": 751,
            "arguments": [
              {
                "type": "Literal",
                "start": 742,
                "end": 750,
                "raw": "\"canvas\"",
                "value": "canvas"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 725,
              "end": 741,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 725,
                "end": 727,
                "decorators": [],
                "name": "d2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 728,
                "end": 741,
                "decorators": [],
                "name": "createElement",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 753,
      "end": 809,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 757,
          "end": 808,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 757,
            "end": 782,
            "decorators": [],
            "name": "htmlDivElement2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 772,
              "end": 782,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 774,
                "end": 782,
                "typeName": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 782,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 785,
            "end": 808,
            "arguments": [
              {
                "type": "Literal",
                "start": 802,
                "end": 807,
                "raw": "\"div\"",
                "value": "div"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 785,
              "end": 801,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 785,
                "end": 787,
                "decorators": [],
                "name": "d2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 788,
                "end": 801,
                "decorators": [],
                "name": "createElement",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 810,
      "end": 868,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 814,
          "end": 867,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 814,
            "end": 840,
            "decorators": [],
            "name": "htmlSpanElement2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 830,
              "end": 840,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 832,
                "end": 840,
                "typeName": {
                  "type": "Identifier",
                  "start": 832,
                  "end": 840,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 843,
            "end": 867,
            "arguments": [
              {
                "type": "Literal",
                "start": 860,
                "end": 866,
                "raw": "\"span\"",
                "value": "span"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 843,
              "end": 859,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 843,
                "end": 845,
                "decorators": [],
                "name": "d2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 846,
                "end": 859,
                "decorators": [],
                "name": "createElement",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
