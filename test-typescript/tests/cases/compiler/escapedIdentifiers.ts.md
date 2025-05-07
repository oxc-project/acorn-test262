__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 117,
  "end": 2484,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 131,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 127,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 130,
            "end": 131,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 133,
      "end": 138,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 133,
        "end": 137,
        "argument": {
          "type": "Identifier",
          "start": 133,
          "end": 134,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 149,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 139,
        "end": 148,
        "argument": {
          "type": "Identifier",
          "start": 139,
          "end": 145,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 159,
            "end": 160,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 167,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 162,
        "end": 166,
        "argument": {
          "type": "Identifier",
          "start": 162,
          "end": 163,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 178,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 168,
        "end": 177,
        "argument": {
          "type": "Identifier",
          "start": 168,
          "end": 174,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 191,
      "end": 243,
      "body": {
        "type": "TSModuleBlock",
        "start": 210,
        "end": 243,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 217,
            "end": 241,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 224,
              "end": 241,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 228,
                  "end": 240,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 240,
                    "decorators": [],
                    "name": "baz1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 232,
                      "end": 240,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 234,
                        "end": 240
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 198,
        "end": 209,
        "decorators": [],
        "name": "moduleType1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 244,
      "end": 301,
      "body": {
        "type": "TSModuleBlock",
        "start": 268,
        "end": 301,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 275,
            "end": 299,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 282,
              "end": 299,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 286,
                  "end": 298,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 286,
                    "end": 298,
                    "decorators": [],
                    "name": "baz2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 290,
                      "end": 298,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 292,
                        "end": 298
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 251,
        "end": 267,
        "decorators": [],
        "name": "moduleType2",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 303,
      "end": 324,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 303,
        "end": 323,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 303,
          "end": 319,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 303,
            "end": 314,
            "decorators": [],
            "name": "moduleType1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 315,
            "end": 319,
            "decorators": [],
            "name": "baz1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 322,
          "end": 323,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 325,
      "end": 351,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 325,
        "end": 350,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 325,
          "end": 346,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 325,
            "end": 341,
            "decorators": [],
            "name": "moduleType1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 342,
            "end": 346,
            "decorators": [],
            "name": "baz1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 349,
          "end": 350,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 352,
      "end": 373,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 352,
        "end": 372,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 352,
          "end": 368,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 352,
            "end": 363,
            "decorators": [],
            "name": "moduleType2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 364,
            "end": 368,
            "decorators": [],
            "name": "baz2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 371,
          "end": 372,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 374,
      "end": 400,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 374,
        "end": 399,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 374,
          "end": 395,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 374,
            "end": 390,
            "decorators": [],
            "name": "moduleType2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 391,
            "end": 395,
            "decorators": [],
            "name": "baz2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 398,
          "end": 399,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 414,
      "end": 460,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 431,
        "end": 460,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 438,
            "end": 458,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 445,
              "end": 449,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 449,
              "end": 457,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 451,
                "end": 457
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
        "start": 420,
        "end": 430,
        "decorators": [],
        "name": "classType1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 461,
      "end": 512,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 483,
        "end": 512,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 490,
            "end": 510,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 497,
              "end": 501,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 501,
              "end": 509,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 503,
                "end": 509
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
        "start": 467,
        "end": 482,
        "decorators": [],
        "name": "classType2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 514,
      "end": 555,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 518,
          "end": 554,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 518,
            "end": 535,
            "decorators": [],
            "name": "classType1Object1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 538,
            "end": 554,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 542,
              "end": 552,
              "decorators": [],
              "name": "classType1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 556,
      "end": 583,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 556,
        "end": 582,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 556,
          "end": 578,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 556,
            "end": 573,
            "decorators": [],
            "name": "classType1Object1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 574,
            "end": 578,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 581,
          "end": 582,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 584,
      "end": 630,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 629,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 605,
            "decorators": [],
            "name": "classType1Object2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 608,
            "end": 629,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 612,
              "end": 627,
              "decorators": [],
              "name": "classType1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 631,
      "end": 658,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 631,
        "end": 657,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 631,
          "end": 653,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 631,
            "end": 648,
            "decorators": [],
            "name": "classType1Object2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 649,
            "end": 653,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 656,
          "end": 657,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 659,
      "end": 700,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 663,
          "end": 699,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 663,
            "end": 680,
            "decorators": [],
            "name": "classType2Object1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 683,
            "end": 699,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 687,
              "end": 697,
              "decorators": [],
              "name": "classType2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 701,
      "end": 728,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 701,
        "end": 727,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 701,
          "end": 723,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 701,
            "end": 718,
            "decorators": [],
            "name": "classType2Object1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 719,
            "end": 723,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 726,
          "end": 727,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 729,
      "end": 775,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 733,
          "end": 774,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 733,
            "end": 750,
            "decorators": [],
            "name": "classType2Object2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 753,
            "end": 774,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 757,
              "end": 772,
              "decorators": [],
              "name": "classType2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 776,
      "end": 803,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 776,
        "end": 802,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 776,
          "end": 798,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 776,
            "end": 793,
            "decorators": [],
            "name": "classType2Object2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 794,
            "end": 798,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 801,
          "end": 802,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 819,
      "end": 866,
      "body": {
        "type": "TSInterfaceBody",
        "start": 844,
        "end": 866,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 851,
            "end": 864,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 851,
              "end": 855,
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 855,
              "end": 863,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 857,
                "end": 863
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 829,
        "end": 843,
        "decorators": [],
        "name": "interfaceType1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 867,
      "end": 919,
      "body": {
        "type": "TSInterfaceBody",
        "start": 897,
        "end": 919,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 904,
            "end": 917,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 904,
              "end": 908,
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 908,
              "end": 916,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 910,
                "end": 916
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 877,
        "end": 896,
        "decorators": [],
        "name": "interfaceType2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 921,
      "end": 977,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 925,
          "end": 976,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 925,
            "end": 946,
            "decorators": [],
            "name": "interfaceType1Object1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 949,
            "end": 976,
            "expression": {
              "type": "ObjectExpression",
              "start": 965,
              "end": 976,
              "properties": [
                {
                  "type": "Property",
                  "start": 967,
                  "end": 974,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 967,
                    "end": 971,
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 973,
                    "end": 974,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 950,
              "end": 964,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 950,
                "end": 964,
                "decorators": [],
                "name": "interfaceType1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 978,
      "end": 1009,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 978,
        "end": 1008,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 978,
          "end": 1004,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 978,
            "end": 999,
            "decorators": [],
            "name": "interfaceType1Object1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1000,
            "end": 1004,
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1007,
          "end": 1008,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1010,
      "end": 1071,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1014,
          "end": 1070,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1014,
            "end": 1035,
            "decorators": [],
            "name": "interfaceType1Object2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1038,
            "end": 1070,
            "expression": {
              "type": "ObjectExpression",
              "start": 1059,
              "end": 1070,
              "properties": [
                {
                  "type": "Property",
                  "start": 1061,
                  "end": 1068,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1065,
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1067,
                    "end": 1068,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1039,
              "end": 1058,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1039,
                "end": 1058,
                "decorators": [],
                "name": "interfaceType1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1072,
      "end": 1103,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1072,
        "end": 1102,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1072,
          "end": 1098,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1072,
            "end": 1093,
            "decorators": [],
            "name": "interfaceType1Object2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1094,
            "end": 1098,
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1101,
          "end": 1102,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1104,
      "end": 1160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1108,
          "end": 1159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1108,
            "end": 1129,
            "decorators": [],
            "name": "interfaceType2Object1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1132,
            "end": 1159,
            "expression": {
              "type": "ObjectExpression",
              "start": 1148,
              "end": 1159,
              "properties": [
                {
                  "type": "Property",
                  "start": 1150,
                  "end": 1157,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1150,
                    "end": 1154,
                    "decorators": [],
                    "name": "bar2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1156,
                    "end": 1157,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1133,
              "end": 1147,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1133,
                "end": 1147,
                "decorators": [],
                "name": "interfaceType2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1161,
      "end": 1192,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1161,
        "end": 1191,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1161,
          "end": 1187,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1161,
            "end": 1182,
            "decorators": [],
            "name": "interfaceType2Object1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1183,
            "end": 1187,
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1190,
          "end": 1191,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1193,
      "end": 1254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1197,
          "end": 1253,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1197,
            "end": 1218,
            "decorators": [],
            "name": "interfaceType2Object2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1221,
            "end": 1253,
            "expression": {
              "type": "ObjectExpression",
              "start": 1242,
              "end": 1253,
              "properties": [
                {
                  "type": "Property",
                  "start": 1244,
                  "end": 1251,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1244,
                    "end": 1248,
                    "decorators": [],
                    "name": "bar2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1250,
                    "end": 1251,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1222,
              "end": 1241,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1222,
                "end": 1241,
                "decorators": [],
                "name": "interfaceType2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1255,
      "end": 1286,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1255,
        "end": 1285,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1255,
          "end": 1281,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1255,
            "end": 1276,
            "decorators": [],
            "name": "interfaceType2Object2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1277,
            "end": 1281,
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1284,
          "end": 1285,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1302,
      "end": 1506,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1318,
        "end": 1506,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1325,
            "end": 1504,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1332,
              "end": 1336,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1336,
              "end": 1504,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1404,
                "end": 1504,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1415,
                    "end": 1429,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1415,
                      "end": 1428,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1415,
                        "end": 1424,
                        "decorators": [],
                        "name": "arg1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1427,
                        "end": 1428,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1438,
                    "end": 1454,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1438,
                      "end": 1453,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1438,
                        "end": 1442,
                        "decorators": [],
                        "name": "arg2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1445,
                        "end": 1453,
                        "raw": "'string'",
                        "value": "string",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1463,
                    "end": 1480,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1463,
                      "end": 1479,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1463,
                        "end": 1472,
                        "decorators": [],
                        "name": "arg3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1475,
                        "end": 1479,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1489,
                    "end": 1498,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1489,
                      "end": 1497,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1489,
                        "end": 1493,
                        "decorators": [],
                        "name": "arg4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1496,
                        "end": 1497,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1337,
                  "end": 1349,
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1341,
                    "end": 1349,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1343,
                      "end": 1349
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1351,
                  "end": 1368,
                  "decorators": [],
                  "name": "arg2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1360,
                    "end": 1368,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1362,
                      "end": 1368
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1370,
                  "end": 1388,
                  "decorators": [],
                  "name": "arg3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1379,
                    "end": 1388,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1381,
                      "end": 1388
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1390,
                  "end": 1402,
                  "decorators": [],
                  "name": "arg4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1394,
                    "end": 1402,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1396,
                      "end": 1402
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1308,
        "end": 1317,
        "decorators": [],
        "name": "testClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1524,
      "end": 1673,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1551,
        "end": 1673,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1558,
            "end": 1671,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1558,
              "end": 1569,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1570,
              "end": 1671,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1663,
                "end": 1671,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 1571,
                  "end": 1590,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 1578,
                    "end": 1590,
                    "decorators": [],
                    "name": "arg1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1582,
                      "end": 1590,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1584,
                        "end": 1590
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 1591,
                  "end": 1615,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 1598,
                    "end": 1615,
                    "decorators": [],
                    "name": "arg2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1607,
                      "end": 1615,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1609,
                        "end": 1615
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 1616,
                  "end": 1641,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 1623,
                    "end": 1641,
                    "decorators": [],
                    "name": "arg3",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1632,
                      "end": 1641,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1634,
                        "end": 1641
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 1642,
                  "end": 1661,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 1649,
                    "end": 1661,
                    "decorators": [],
                    "name": "arg4",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1653,
                      "end": 1661,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1655,
                        "end": 1661
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1530,
        "end": 1550,
        "decorators": [],
        "name": "constructorTestClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1674,
      "end": 1749,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1678,
          "end": 1748,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1678,
            "end": 1699,
            "decorators": [],
            "name": "constructorTestObject",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1702,
            "end": 1748,
            "arguments": [
              {
                "type": "Literal",
                "start": 1727,
                "end": 1728,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1730,
                "end": 1738,
                "raw": "'string'",
                "value": "string",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1740,
                "end": 1744,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1746,
                "end": 1747,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1706,
              "end": 1726,
              "decorators": [],
              "name": "constructorTestClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1750,
      "end": 1786,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1750,
        "end": 1785,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1750,
          "end": 1781,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1750,
            "end": 1771,
            "decorators": [],
            "name": "constructorTestObject",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1772,
            "end": 1781,
            "decorators": [],
            "name": "arg1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1784,
          "end": 1785,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1787,
      "end": 1825,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1787,
        "end": 1824,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1787,
          "end": 1813,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1787,
            "end": 1808,
            "decorators": [],
            "name": "constructorTestObject",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1809,
            "end": 1813,
            "decorators": [],
            "name": "arg2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1816,
          "end": 1824,
          "raw": "'string'",
          "value": "string",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1826,
      "end": 1865,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1826,
        "end": 1864,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1826,
          "end": 1857,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1826,
            "end": 1847,
            "decorators": [],
            "name": "constructorTestObject",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1848,
            "end": 1857,
            "decorators": [],
            "name": "arg3",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1860,
          "end": 1864,
          "raw": "true",
          "value": true,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1866,
      "end": 1897,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1866,
        "end": 1896,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1866,
          "end": 1892,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1866,
            "end": 1887,
            "decorators": [],
            "name": "constructorTestObject",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1888,
            "end": 1892,
            "decorators": [],
            "name": "arg4",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1895,
          "end": 1896,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1910,
      "end": 2051,
      "body": {
        "type": "WhileStatement",
        "start": 1928,
        "end": 2051,
        "body": {
          "type": "BlockStatement",
          "start": 1946,
          "end": 2051,
          "body": [
            {
              "type": "WhileStatement",
              "start": 1957,
              "end": 1997,
              "body": {
                "type": "ContinueStatement",
                "start": 1981,
                "end": 1997,
                "label": {
                  "type": "Identifier",
                  "start": 1990,
                  "end": 1996,
                  "decorators": [],
                  "name": "label1",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "test": {
                "type": "Literal",
                "start": 1963,
                "end": 1968,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 1935,
          "end": 1940,
          "raw": "false",
          "value": false,
          "regex": null,
          "bigint": null
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1910,
        "end": 1921,
        "decorators": [],
        "name": "label1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 2054,
      "end": 2195,
      "body": {
        "type": "WhileStatement",
        "start": 2067,
        "end": 2195,
        "body": {
          "type": "BlockStatement",
          "start": 2085,
          "end": 2195,
          "body": [
            {
              "type": "WhileStatement",
              "start": 2096,
              "end": 2141,
              "body": {
                "type": "ContinueStatement",
                "start": 2120,
                "end": 2141,
                "label": {
                  "type": "Identifier",
                  "start": 2129,
                  "end": 2140,
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "test": {
                "type": "Literal",
                "start": 2102,
                "end": 2107,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 2074,
          "end": 2079,
          "raw": "false",
          "value": false,
          "regex": null,
          "bigint": null
        }
      },
      "label": {
        "type": "Identifier",
        "start": 2054,
        "end": 2060,
        "decorators": [],
        "name": "label2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 2198,
      "end": 2334,
      "body": {
        "type": "WhileStatement",
        "start": 2211,
        "end": 2334,
        "body": {
          "type": "BlockStatement",
          "start": 2229,
          "end": 2334,
          "body": [
            {
              "type": "WhileStatement",
              "start": 2240,
              "end": 2280,
              "body": {
                "type": "ContinueStatement",
                "start": 2264,
                "end": 2280,
                "label": {
                  "type": "Identifier",
                  "start": 2273,
                  "end": 2279,
                  "decorators": [],
                  "name": "label3",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "test": {
                "type": "Literal",
                "start": 2246,
                "end": 2251,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 2218,
          "end": 2223,
          "raw": "false",
          "value": false,
          "regex": null,
          "bigint": null
        }
      },
      "label": {
        "type": "Identifier",
        "start": 2198,
        "end": 2204,
        "decorators": [],
        "name": "label3",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 2337,
      "end": 2483,
      "body": {
        "type": "WhileStatement",
        "start": 2355,
        "end": 2483,
        "body": {
          "type": "BlockStatement",
          "start": 2373,
          "end": 2483,
          "body": [
            {
              "type": "WhileStatement",
              "start": 2384,
              "end": 2429,
              "body": {
                "type": "ContinueStatement",
                "start": 2408,
                "end": 2429,
                "label": {
                  "type": "Identifier",
                  "start": 2417,
                  "end": 2428,
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "test": {
                "type": "Literal",
                "start": 2390,
                "end": 2395,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 2362,
          "end": 2367,
          "raw": "false",
          "value": false,
          "regex": null,
          "bigint": null
        }
      },
      "label": {
        "type": "Identifier",
        "start": 2337,
        "end": 2348,
        "decorators": [],
        "name": "label4",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
