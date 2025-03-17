__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 681,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 65,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 65,
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 33,
          "name": "AmbientClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 34,
          "end": 65,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 40,
              "end": 63,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 49,
                "end": 54,
                "name": "yadda",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 54,
                "end": 63,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": null,
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 62,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 58,
                    "end": 62
                  }
                }
              },
              "decorators": [],
              "override": true,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": true,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 129,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 74,
        "end": 129,
        "id": {
          "type": "Identifier",
          "start": 80,
          "end": 95,
          "name": "NonAmbientClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 96,
          "end": 129,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 102,
              "end": 127,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 111,
                "end": 116,
                "name": "yadda",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 116,
                "end": 127,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 125,
                  "end": 127,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 118,
                  "end": 124,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 120,
                    "end": 124
                  }
                }
              },
              "decorators": [],
              "override": true,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 138,
      "end": 191,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 145,
        "end": 191,
        "id": {
          "type": "Identifier",
          "start": 159,
          "end": 170,
          "name": "AmbientBase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 171,
          "end": 191,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 177,
              "end": 189,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 177,
                "end": 180,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 180,
                "end": 189,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": null,
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 182,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 184,
                    "end": 188
                  }
                }
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
        "declare": true,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 193,
      "end": 296,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 200,
        "end": 296,
        "id": {
          "type": "Identifier",
          "start": 214,
          "end": 228,
          "name": "AmbientDerived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 237,
          "end": 248,
          "name": "AmbientBase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 249,
          "end": 296,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 255,
              "end": 267,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 255,
                "end": 258,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 258,
                "end": 267,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": null,
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 260,
                  "end": 266,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 262,
                    "end": 266
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 273,
              "end": 294,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 282,
                "end": 285,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 285,
                "end": 294,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": null,
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 287,
                  "end": 293,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 289,
                    "end": 293
                  }
                }
              },
              "decorators": [],
              "override": true,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": true,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 305,
      "end": 514,
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 339,
        "name": "ambientNamespace",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 340,
        "end": 514,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 346,
            "end": 399,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 353,
              "end": 399,
              "id": {
                "type": "Identifier",
                "start": 359,
                "end": 370,
                "name": "AmbientBase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 371,
                "end": 399,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 381,
                    "end": 393,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 384,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 384,
                      "end": 393,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 386,
                        "end": 392,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 388,
                          "end": 392
                        }
                      }
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 405,
            "end": 512,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 412,
              "end": 512,
              "id": {
                "type": "Identifier",
                "start": 418,
                "end": 432,
                "name": "AmbientDerived",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 441,
                "end": 452,
                "name": "AmbientBase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 453,
                "end": 512,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 463,
                    "end": 475,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 463,
                      "end": 466,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 466,
                      "end": 475,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 468,
                        "end": 474,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 470,
                          "end": 474
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 485,
                    "end": 506,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 497,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 497,
                      "end": 506,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 499,
                        "end": 505,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 501,
                          "end": 505
                        }
                      }
                    },
                    "decorators": [],
                    "override": true,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 523,
      "end": 573,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 530,
        "end": 573,
        "id": {
          "type": "Identifier",
          "start": 536,
          "end": 550,
          "name": "NonAmbientBase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 551,
          "end": 573,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 557,
              "end": 571,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 557,
                "end": 560,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 560,
                "end": 571,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 569,
                  "end": 571,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 562,
                  "end": 568,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 564,
                    "end": 568
                  }
                }
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 575,
      "end": 680,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 582,
        "end": 680,
        "id": {
          "type": "Identifier",
          "start": 588,
          "end": 605,
          "name": "NonAmbientDerived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 614,
          "end": 628,
          "name": "NonAmbientBase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 629,
          "end": 680,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 635,
              "end": 649,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 635,
                "end": 638,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 638,
                "end": 649,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 647,
                  "end": 649,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 640,
                  "end": 646,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 642,
                    "end": 646
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 655,
              "end": 678,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 664,
                "end": 667,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 667,
                "end": 678,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 676,
                  "end": 678,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 669,
                  "end": 675,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 671,
                    "end": 675
                  }
                }
              },
              "decorators": [],
              "override": true,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
