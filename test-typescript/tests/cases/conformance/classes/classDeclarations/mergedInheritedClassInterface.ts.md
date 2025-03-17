__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 807,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 72,
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 72,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 47,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 38,
              "decorators": [],
              "name": "required",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 70,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 60,
              "decorators": [],
              "name": "optional",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 23,
        "decorators": [],
        "name": "BaseInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 138,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 96,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 106,
              "decorators": [],
              "name": "baseMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 112,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 109,
                "end": 112,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 117,
            "end": 136,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 127,
              "decorators": [],
              "name": "baseNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 135,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 129,
                "end": 135
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
        "start": 80,
        "end": 89,
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 140,
      "end": 205,
      "body": {
        "type": "TSInterfaceBody",
        "start": 178,
        "end": 205,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 184,
            "end": 203,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 194,
              "decorators": [],
              "name": "additional",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 202,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 196,
                "end": 202
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 164,
          "end": 177,
          "expression": {
            "type": "Identifier",
            "start": 164,
            "end": 177,
            "decorators": [],
            "name": "BaseInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 155,
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 207,
      "end": 282,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 237,
        "end": 282,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 243,
            "end": 263,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 254,
              "decorators": [],
              "name": "classNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 262,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 256,
                "end": 262
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 268,
            "end": 280,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 274,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 274,
              "end": 280,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 277,
                "end": 280,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 213,
        "end": 218,
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 227,
        "end": 236,
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 284,
      "end": 361,
      "body": {
        "type": "TSInterfaceBody",
        "start": 333,
        "end": 361,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 339,
            "end": 359,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 350,
              "decorators": [],
              "name": "additional2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 358,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 352,
                "end": 358
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 319,
          "end": 332,
          "expression": {
            "type": "Identifier",
            "start": 319,
            "end": 332,
            "decorators": [],
            "name": "BaseInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 310,
        "decorators": [],
        "name": "ChildNoBaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 362,
      "end": 431,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 385,
        "end": 431,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 391,
            "end": 411,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 402,
              "decorators": [],
              "name": "classString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 402,
              "end": 410,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 404,
                "end": 410
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 416,
            "end": 429,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 416,
              "end": 423,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 423,
              "end": 429,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 426,
                "end": 429,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 368,
        "end": 384,
        "decorators": [],
        "name": "ChildNoBaseClass",
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
      "start": 432,
      "end": 477,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 474,
        "end": 477,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 438,
        "end": 448,
        "decorators": [],
        "name": "Grandchild",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 457,
        "end": 473,
        "decorators": [],
        "name": "ChildNoBaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 524,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 528,
          "end": 541,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 528,
            "end": 541,
            "decorators": [],
            "name": "child",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 534,
              "end": 541,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 536,
                "end": 541,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 536,
                  "end": 541,
                  "decorators": [],
                  "name": "Child",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 543,
      "end": 558,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 543,
        "end": 557,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 543,
          "end": 548,
          "decorators": [],
          "name": "child",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 549,
          "end": 557,
          "decorators": [],
          "name": "required",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 559,
      "end": 574,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 559,
        "end": 573,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 559,
          "end": 564,
          "decorators": [],
          "name": "child",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 565,
          "end": 573,
          "decorators": [],
          "name": "optional",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 575,
      "end": 592,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 575,
        "end": 591,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 575,
          "end": 580,
          "decorators": [],
          "name": "child",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 581,
          "end": 591,
          "decorators": [],
          "name": "additional",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 593,
      "end": 610,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 593,
        "end": 609,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 593,
          "end": 598,
          "decorators": [],
          "name": "child",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 599,
          "end": 609,
          "decorators": [],
          "name": "baseNumber",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 611,
      "end": 629,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 611,
        "end": 628,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 611,
          "end": 616,
          "decorators": [],
          "name": "child",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 617,
          "end": 628,
          "decorators": [],
          "name": "classNumber",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 630,
      "end": 649,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 630,
        "end": 648,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 630,
          "end": 646,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 630,
            "end": 635,
            "decorators": [],
            "name": "child",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 636,
            "end": 646,
            "decorators": [],
            "name": "baseMethod",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 650,
      "end": 665,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 650,
        "end": 664,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 650,
          "end": 662,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 650,
            "end": 655,
            "decorators": [],
            "name": "child",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 656,
            "end": 662,
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 667,
      "end": 694,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 671,
          "end": 693,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 693,
            "decorators": [],
            "name": "grandchild",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 681,
              "end": 693,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 683,
                "end": 693,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 683,
                  "end": 693,
                  "decorators": [],
                  "name": "Grandchild",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 695,
      "end": 715,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 695,
        "end": 714,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 695,
          "end": 705,
          "decorators": [],
          "name": "grandchild",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 706,
          "end": 714,
          "decorators": [],
          "name": "required",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 716,
      "end": 736,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 716,
        "end": 735,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 716,
          "end": 726,
          "decorators": [],
          "name": "grandchild",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 727,
          "end": 735,
          "decorators": [],
          "name": "optional",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 737,
      "end": 760,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 737,
        "end": 759,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 737,
          "end": 747,
          "decorators": [],
          "name": "grandchild",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 748,
          "end": 759,
          "decorators": [],
          "name": "additional2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 761,
      "end": 784,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 761,
        "end": 783,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 761,
          "end": 771,
          "decorators": [],
          "name": "grandchild",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 772,
          "end": 783,
          "decorators": [],
          "name": "classString",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 785,
      "end": 806,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 785,
        "end": 805,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 785,
          "end": 803,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 785,
            "end": 795,
            "decorators": [],
            "name": "grandchild",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 796,
            "end": 803,
            "decorators": [],
            "name": "method2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
