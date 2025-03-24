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
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 127,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 130,
            "end": 131,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 133,
      "end": 138,
      "expression": {
        "type": "UpdateExpression",
        "start": 133,
        "end": 137,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 133,
          "end": 134,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 149,
      "expression": {
        "type": "UpdateExpression",
        "start": 139,
        "end": 148,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 139,
          "end": 145,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 159,
            "end": 160,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 167,
      "expression": {
        "type": "UpdateExpression",
        "start": 162,
        "end": 166,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 162,
          "end": 163,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 178,
      "expression": {
        "type": "UpdateExpression",
        "start": 168,
        "end": 177,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 168,
          "end": 174,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 191,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 209,
        "name": "moduleType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 210,
        "end": 243,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 217,
            "end": 241,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 224,
              "end": 241,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 228,
                  "end": 240,
                  "id": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 240,
                    "name": "baz1",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 232,
                      "end": 240,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 234,
                        "end": 240
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 244,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 267,
        "name": "moduleType2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 268,
        "end": 301,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 275,
            "end": 299,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 282,
              "end": 299,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 286,
                  "end": 298,
                  "id": {
                    "type": "Identifier",
                    "start": 286,
                    "end": 298,
                    "name": "baz2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 290,
                      "end": 298,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 292,
                        "end": 298
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 303,
      "end": 324,
      "expression": {
        "type": "AssignmentExpression",
        "start": 303,
        "end": 323,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 303,
          "end": 319,
          "object": {
            "type": "Identifier",
            "start": 303,
            "end": 314,
            "name": "moduleType1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 315,
            "end": 319,
            "name": "baz1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 322,
          "end": 323,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 325,
      "end": 351,
      "expression": {
        "type": "AssignmentExpression",
        "start": 325,
        "end": 350,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 325,
          "end": 346,
          "object": {
            "type": "Identifier",
            "start": 325,
            "end": 341,
            "name": "moduleType1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 342,
            "end": 346,
            "name": "baz1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 349,
          "end": 350,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 352,
      "end": 373,
      "expression": {
        "type": "AssignmentExpression",
        "start": 352,
        "end": 372,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 352,
          "end": 368,
          "object": {
            "type": "Identifier",
            "start": 352,
            "end": 363,
            "name": "moduleType2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 364,
            "end": 368,
            "name": "baz2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 371,
          "end": 372,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 374,
      "end": 400,
      "expression": {
        "type": "AssignmentExpression",
        "start": 374,
        "end": 399,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 374,
          "end": 395,
          "object": {
            "type": "Identifier",
            "start": 374,
            "end": 390,
            "name": "moduleType2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 391,
            "end": 395,
            "name": "baz2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 398,
          "end": 399,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 414,
      "end": 460,
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 430,
        "name": "classType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 431,
        "end": 460,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 438,
            "end": 458,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 445,
              "end": 449,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
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
      "type": "ClassDeclaration",
      "start": 461,
      "end": 512,
      "id": {
        "type": "Identifier",
        "start": 467,
        "end": 482,
        "name": "classType2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 483,
        "end": 512,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 490,
            "end": 510,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 497,
              "end": 501,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
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
      "type": "VariableDeclaration",
      "start": 514,
      "end": 555,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 518,
          "end": 554,
          "id": {
            "type": "Identifier",
            "start": 518,
            "end": 535,
            "name": "classType1Object1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 538,
            "end": 554,
            "callee": {
              "type": "Identifier",
              "start": 542,
              "end": 552,
              "name": "classType1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 556,
      "end": 583,
      "expression": {
        "type": "AssignmentExpression",
        "start": 556,
        "end": 582,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 556,
          "end": 578,
          "object": {
            "type": "Identifier",
            "start": 556,
            "end": 573,
            "name": "classType1Object1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 574,
            "end": 578,
            "name": "foo1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 581,
          "end": 582,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 605,
            "name": "classType1Object2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 608,
            "end": 629,
            "callee": {
              "type": "Identifier",
              "start": 612,
              "end": 627,
              "name": "classType1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 631,
      "end": 658,
      "expression": {
        "type": "AssignmentExpression",
        "start": 631,
        "end": 657,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 631,
          "end": 653,
          "object": {
            "type": "Identifier",
            "start": 631,
            "end": 648,
            "name": "classType1Object2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 649,
            "end": 653,
            "name": "foo1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 656,
          "end": 657,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 663,
            "end": 680,
            "name": "classType2Object1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 683,
            "end": 699,
            "callee": {
              "type": "Identifier",
              "start": 687,
              "end": 697,
              "name": "classType2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 701,
      "end": 728,
      "expression": {
        "type": "AssignmentExpression",
        "start": 701,
        "end": 727,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 701,
          "end": 723,
          "object": {
            "type": "Identifier",
            "start": 701,
            "end": 718,
            "name": "classType2Object1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 719,
            "end": 723,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 726,
          "end": 727,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 733,
            "end": 750,
            "name": "classType2Object2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 753,
            "end": 774,
            "callee": {
              "type": "Identifier",
              "start": 757,
              "end": 772,
              "name": "classType2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 776,
      "end": 803,
      "expression": {
        "type": "AssignmentExpression",
        "start": 776,
        "end": 802,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 776,
          "end": 798,
          "object": {
            "type": "Identifier",
            "start": 776,
            "end": 793,
            "name": "classType2Object2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 794,
            "end": 798,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 801,
          "end": 802,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 819,
      "end": 866,
      "id": {
        "type": "Identifier",
        "start": 829,
        "end": 843,
        "name": "interfaceType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 844,
        "end": 866,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 851,
            "end": 864,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 851,
              "end": 855,
              "name": "bar1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 855,
              "end": 863,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 857,
                "end": 863
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 867,
      "end": 919,
      "id": {
        "type": "Identifier",
        "start": 877,
        "end": 896,
        "name": "interfaceType2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 897,
        "end": 919,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 904,
            "end": 917,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 904,
              "end": 908,
              "name": "bar2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 908,
              "end": 916,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 910,
                "end": 916
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 925,
            "end": 946,
            "name": "interfaceType1Object1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 967,
                    "end": 971,
                    "name": "bar1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 973,
                    "end": 974,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 950,
              "end": 964,
              "typeName": {
                "type": "Identifier",
                "start": 950,
                "end": 964,
                "name": "interfaceType1",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 978,
      "end": 1009,
      "expression": {
        "type": "AssignmentExpression",
        "start": 978,
        "end": 1008,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 978,
          "end": 1004,
          "object": {
            "type": "Identifier",
            "start": 978,
            "end": 999,
            "name": "interfaceType1Object1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1000,
            "end": 1004,
            "name": "bar1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1007,
          "end": 1008,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1014,
            "end": 1035,
            "name": "interfaceType1Object2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1065,
                    "name": "bar1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1067,
                    "end": 1068,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1039,
              "end": 1058,
              "typeName": {
                "type": "Identifier",
                "start": 1039,
                "end": 1058,
                "name": "interfaceType1",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1072,
      "end": 1103,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1072,
        "end": 1102,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1072,
          "end": 1098,
          "object": {
            "type": "Identifier",
            "start": 1072,
            "end": 1093,
            "name": "interfaceType1Object2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1094,
            "end": 1098,
            "name": "bar1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1101,
          "end": 1102,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1108,
            "end": 1129,
            "name": "interfaceType2Object1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1150,
                    "end": 1154,
                    "name": "bar2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1156,
                    "end": 1157,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1133,
              "end": 1147,
              "typeName": {
                "type": "Identifier",
                "start": 1133,
                "end": 1147,
                "name": "interfaceType2",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1161,
      "end": 1192,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1161,
        "end": 1191,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1161,
          "end": 1187,
          "object": {
            "type": "Identifier",
            "start": 1161,
            "end": 1182,
            "name": "interfaceType2Object1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1183,
            "end": 1187,
            "name": "bar2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1190,
          "end": 1191,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1197,
            "end": 1218,
            "name": "interfaceType2Object2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1244,
                    "end": 1248,
                    "name": "bar2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1250,
                    "end": 1251,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1222,
              "end": 1241,
              "typeName": {
                "type": "Identifier",
                "start": 1222,
                "end": 1241,
                "name": "interfaceType2",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1255,
      "end": 1286,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1255,
        "end": 1285,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1255,
          "end": 1281,
          "object": {
            "type": "Identifier",
            "start": 1255,
            "end": 1276,
            "name": "interfaceType2Object2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1277,
            "end": 1281,
            "name": "bar2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1284,
          "end": 1285,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1302,
      "end": 1506,
      "id": {
        "type": "Identifier",
        "start": 1308,
        "end": 1317,
        "name": "testClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1318,
        "end": 1506,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1325,
            "end": 1504,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1332,
              "end": 1336,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1336,
              "end": 1504,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1337,
                  "end": 1349,
                  "name": "arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1341,
                    "end": 1349,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1343,
                      "end": 1349
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1351,
                  "end": 1368,
                  "name": "arg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1360,
                    "end": 1368,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1362,
                      "end": 1368
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1370,
                  "end": 1388,
                  "name": "arg3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1379,
                    "end": 1388,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1381,
                      "end": 1388
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1390,
                  "end": 1402,
                  "name": "arg4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1394,
                    "end": 1402,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1396,
                      "end": 1402
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1404,
                "end": 1504,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1415,
                    "end": 1429,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1415,
                      "end": 1428,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1415,
                        "end": 1424,
                        "name": "arg1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1427,
                        "end": 1428,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1438,
                    "end": 1454,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1438,
                      "end": 1453,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1438,
                        "end": 1442,
                        "name": "arg2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1445,
                        "end": 1453,
                        "value": "string",
                        "raw": "'string'"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1463,
                    "end": 1480,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1463,
                      "end": 1479,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1463,
                        "end": 1472,
                        "name": "arg3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1475,
                        "end": 1479,
                        "value": true,
                        "raw": "true"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1489,
                    "end": 1498,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1489,
                      "end": 1497,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1489,
                        "end": 1493,
                        "name": "arg4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1496,
                        "end": 1497,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
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
            "accessibility": "public"
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
      "type": "ClassDeclaration",
      "start": 1524,
      "end": 1673,
      "id": {
        "type": "Identifier",
        "start": 1530,
        "end": 1550,
        "name": "constructorTestClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1551,
        "end": 1673,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1558,
            "end": 1671,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1558,
              "end": 1569,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1570,
              "end": 1671,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "arg1",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1582,
                      "end": 1590,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1584,
                        "end": 1590
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "name": "arg2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1607,
                      "end": 1615,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1609,
                        "end": 1615
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "name": "arg3",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1632,
                      "end": 1641,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1634,
                        "end": 1641
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "name": "arg4",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1653,
                      "end": 1661,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1655,
                        "end": 1661
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1663,
                "end": 1671,
                "body": []
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
    {
      "type": "VariableDeclaration",
      "start": 1674,
      "end": 1749,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1678,
          "end": 1748,
          "id": {
            "type": "Identifier",
            "start": 1678,
            "end": 1699,
            "name": "constructorTestObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1702,
            "end": 1748,
            "callee": {
              "type": "Identifier",
              "start": 1706,
              "end": 1726,
              "name": "constructorTestClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1727,
                "end": 1728,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1730,
                "end": 1738,
                "value": "string",
                "raw": "'string'"
              },
              {
                "type": "Literal",
                "start": 1740,
                "end": 1744,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 1746,
                "end": 1747,
                "value": 2,
                "raw": "2"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1750,
      "end": 1786,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1750,
        "end": 1785,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1750,
          "end": 1781,
          "object": {
            "type": "Identifier",
            "start": 1750,
            "end": 1771,
            "name": "constructorTestObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1772,
            "end": 1781,
            "name": "arg1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1784,
          "end": 1785,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1787,
      "end": 1825,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1787,
        "end": 1824,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1787,
          "end": 1813,
          "object": {
            "type": "Identifier",
            "start": 1787,
            "end": 1808,
            "name": "constructorTestObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1809,
            "end": 1813,
            "name": "arg2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1816,
          "end": 1824,
          "value": "string",
          "raw": "'string'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1826,
      "end": 1865,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1826,
        "end": 1864,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1826,
          "end": 1857,
          "object": {
            "type": "Identifier",
            "start": 1826,
            "end": 1847,
            "name": "constructorTestObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1848,
            "end": 1857,
            "name": "arg3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1860,
          "end": 1864,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1866,
      "end": 1897,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1866,
        "end": 1896,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1866,
          "end": 1892,
          "object": {
            "type": "Identifier",
            "start": 1866,
            "end": 1887,
            "name": "constructorTestObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1888,
            "end": 1892,
            "name": "arg4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1895,
          "end": 1896,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "LabeledStatement",
      "start": 1910,
      "end": 2051,
      "body": {
        "type": "WhileStatement",
        "start": 1928,
        "end": 2051,
        "test": {
          "type": "Literal",
          "start": 1935,
          "end": 1940,
          "value": false,
          "raw": "false"
        },
        "body": {
          "type": "BlockStatement",
          "start": 1946,
          "end": 2051,
          "body": [
            {
              "type": "WhileStatement",
              "start": 1957,
              "end": 1997,
              "test": {
                "type": "Literal",
                "start": 1963,
                "end": 1968,
                "value": false,
                "raw": "false"
              },
              "body": {
                "type": "ContinueStatement",
                "start": 1981,
                "end": 1997,
                "label": {
                  "type": "Identifier",
                  "start": 1990,
                  "end": 1996,
                  "name": "label1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1910,
        "end": 1921,
        "name": "label1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "test": {
          "type": "Literal",
          "start": 2074,
          "end": 2079,
          "value": false,
          "raw": "false"
        },
        "body": {
          "type": "BlockStatement",
          "start": 2085,
          "end": 2195,
          "body": [
            {
              "type": "WhileStatement",
              "start": 2096,
              "end": 2141,
              "test": {
                "type": "Literal",
                "start": 2102,
                "end": 2107,
                "value": false,
                "raw": "false"
              },
              "body": {
                "type": "ContinueStatement",
                "start": 2120,
                "end": 2141,
                "label": {
                  "type": "Identifier",
                  "start": 2129,
                  "end": 2140,
                  "name": "label2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 2054,
        "end": 2060,
        "name": "label2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "test": {
          "type": "Literal",
          "start": 2218,
          "end": 2223,
          "value": false,
          "raw": "false"
        },
        "body": {
          "type": "BlockStatement",
          "start": 2229,
          "end": 2334,
          "body": [
            {
              "type": "WhileStatement",
              "start": 2240,
              "end": 2280,
              "test": {
                "type": "Literal",
                "start": 2246,
                "end": 2251,
                "value": false,
                "raw": "false"
              },
              "body": {
                "type": "ContinueStatement",
                "start": 2264,
                "end": 2280,
                "label": {
                  "type": "Identifier",
                  "start": 2273,
                  "end": 2279,
                  "name": "label3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 2198,
        "end": 2204,
        "name": "label3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "test": {
          "type": "Literal",
          "start": 2362,
          "end": 2367,
          "value": false,
          "raw": "false"
        },
        "body": {
          "type": "BlockStatement",
          "start": 2373,
          "end": 2483,
          "body": [
            {
              "type": "WhileStatement",
              "start": 2384,
              "end": 2429,
              "test": {
                "type": "Literal",
                "start": 2390,
                "end": 2395,
                "value": false,
                "raw": "false"
              },
              "body": {
                "type": "ContinueStatement",
                "start": 2408,
                "end": 2429,
                "label": {
                  "type": "Identifier",
                  "start": 2417,
                  "end": 2428,
                  "name": "label4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 2337,
        "end": 2348,
        "name": "label4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
