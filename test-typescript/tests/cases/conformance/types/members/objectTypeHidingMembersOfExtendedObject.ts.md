objectTypeHidingMembersOfExtendedObject.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 813,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 66,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 57,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 70,
      "end": 128,
      "body": {
        "type": "TSInterfaceBody",
        "start": 87,
        "end": 128,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 93,
            "end": 101,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 97,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 100,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 106,
            "end": 126,
            "parameters": [
              {
                "type": "Identifier",
                "start": 107,
                "end": 116,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 108,
                  "end": 116,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 110,
                    "end": 116
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 125,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 125,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 125,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 86,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 194,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 138,
        "end": 194,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 144,
            "end": 157,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 151,
              "decorators": [],
              "name": "valueOf",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 151,
              "end": 157,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 154,
                "end": 157,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 162,
            "end": 170,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 166,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 169,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 168,
                "end": 169,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "TSIndexSignature",
            "start": 175,
            "end": 192,
            "parameters": [
              {
                "type": "Identifier",
                "start": 176,
                "end": 185,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 177,
                  "end": 185,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 179,
                    "end": 185
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 191,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 188,
                "end": 191
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 204,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 204,
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "decorators": [],
                  "name": "C",
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
      "start": 206,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 232,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 218,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 218,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 214,
                "end": 218
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 221,
            "end": 232,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 221,
              "end": 230,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 223,
                "end": 230,
                "decorators": [],
                "name": "valueOf",
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
      "start": 234,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 253,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 244,
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 243,
                "end": 244,
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 247,
            "end": 253,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 249,
              "end": 253,
              "decorators": [],
              "name": "data",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 274,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 262,
            "decorators": [],
            "name": "r1c",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 265,
            "end": 274,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 265,
              "end": 268,
              "decorators": [],
              "name": "r1b",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 269,
              "end": 273,
              "raw": "'hm'",
              "value": "hm"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 315,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 305,
            "decorators": [],
            "name": "r1d",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 308,
            "end": 315,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 310,
              "end": 314,
              "raw": "'hm'",
              "value": "hm"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 337,
      "end": 408,
      "body": {
        "type": "TSInterfaceBody",
        "start": 349,
        "end": 408,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 355,
            "end": 371,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 355,
              "end": 362,
              "decorators": [],
              "name": "valueOf",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 370,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 366,
                "end": 370
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 376,
            "end": 384,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 376,
              "end": 380,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 380,
              "end": 383,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 382,
                "end": 383,
                "typeName": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 383,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 389,
            "end": 406,
            "parameters": [
              {
                "type": "Identifier",
                "start": 390,
                "end": 399,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 391,
                  "end": 399,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 393,
                    "end": 399
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
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
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 348,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 410,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 414,
          "end": 418,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 414,
            "end": 418,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 415,
              "end": 418,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 417,
                "end": 418,
                "typeName": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "decorators": [],
                  "name": "I",
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
      "start": 420,
      "end": 447,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 446,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 432,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 426,
              "end": 432,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 428,
                "end": 432
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 435,
            "end": 446,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 435,
              "end": 444,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 435,
                "end": 436,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 437,
                "end": 444,
                "decorators": [],
                "name": "valueOf",
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
      "start": 448,
      "end": 468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 452,
          "end": 467,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 452,
            "end": 458,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 455,
              "end": 458,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 457,
                "end": 458,
                "typeName": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 458,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 461,
            "end": 467,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 463,
              "end": 467,
              "decorators": [],
              "name": "data",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 469,
      "end": 489,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 488,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 476,
            "decorators": [],
            "name": "r2c",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 479,
            "end": 488,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 479,
              "end": 482,
              "decorators": [],
              "name": "r2b",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 483,
              "end": 487,
              "raw": "'hm'",
              "value": "hm"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 512,
      "end": 530,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 529,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 519,
            "decorators": [],
            "name": "r2d",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 522,
            "end": 529,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 522,
              "end": 523,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 524,
              "end": 528,
              "raw": "'hm'",
              "value": "hm"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 551,
      "end": 604,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 555,
          "end": 604,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 555,
            "end": 556,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 559,
            "end": 604,
            "properties": [
              {
                "type": "Property",
                "start": 565,
                "end": 583,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 565,
                  "end": 572,
                  "decorators": [],
                  "name": "valueOf",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 574,
                  "end": 583,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 580,
                    "end": 583,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 589,
                "end": 602,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 589,
                  "end": 593,
                  "decorators": [],
                  "name": "data",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 595,
                  "end": 602,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 599,
                    "end": 600,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 633,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 610,
          "end": 632,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 610,
            "end": 618,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 612,
              "end": 618,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 614,
                "end": 618
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 621,
            "end": 632,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 621,
              "end": 630,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 621,
                "end": 622,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 623,
                "end": 630,
                "decorators": [],
                "name": "valueOf",
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
      "start": 634,
      "end": 654,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 653,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 644,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 641,
              "end": 644,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 643,
                "end": 644,
                "typeName": {
                  "type": "Identifier",
                  "start": 643,
                  "end": 644,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 647,
            "end": 653,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 649,
              "end": 653,
              "decorators": [],
              "name": "data",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 655,
      "end": 675,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 659,
          "end": 674,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 659,
            "end": 662,
            "decorators": [],
            "name": "r3c",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 665,
            "end": 674,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 665,
              "end": 668,
              "decorators": [],
              "name": "r3b",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 669,
              "end": 673,
              "raw": "'hm'",
              "value": "hm"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 698,
      "end": 716,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 702,
          "end": 715,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 702,
            "end": 705,
            "decorators": [],
            "name": "r3d",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 708,
            "end": 715,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 708,
              "end": 709,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 710,
              "end": 714,
              "raw": "'hm'",
              "value": "hm"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 784,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 784,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 784,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 723,
              "end": 784,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 725,
                "end": 784,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 731,
                    "end": 747,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 731,
                      "end": 738,
                      "decorators": [],
                      "name": "valueOf",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 740,
                      "end": 746,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 742,
                        "end": 746
                      }
                    },
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 752,
                    "end": 760,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 752,
                      "end": 756,
                      "decorators": [],
                      "name": "data",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 756,
                      "end": 759,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 758,
                        "end": 759,
                        "typeName": {
                          "type": "Identifier",
                          "start": 758,
                          "end": 759,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 765,
                    "end": 782,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 766,
                        "end": 775,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 767,
                          "end": 775,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 769,
                            "end": 775
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 776,
                      "end": 781,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 778,
                        "end": 781
                      }
                    }
                  }
                ]
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
      "start": 786,
      "end": 813,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 790,
          "end": 812,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 790,
            "end": 798,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 792,
              "end": 798,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 794,
                "end": 798
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 801,
            "end": 812,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 801,
              "end": 810,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 801,
                "end": 802,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 803,
                "end": 810,
                "decorators": [],
                "name": "valueOf",
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
