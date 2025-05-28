__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 680,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 65,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 65,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 33,
          "decorators": [],
          "name": "AmbientClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 34,
          "end": 65,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 40,
              "end": 63,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 49,
                "end": 54,
                "decorators": [],
                "name": "yadda",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 54,
                "end": 63,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 62,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 58,
                    "end": 62
                  }
                },
                "body": null,
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 129,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 74,
        "end": 129,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 80,
          "end": 95,
          "decorators": [],
          "name": "NonAmbientClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 96,
          "end": 129,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 102,
              "end": 127,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 111,
                "end": 116,
                "decorators": [],
                "name": "yadda",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 116,
                "end": 127,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 118,
                  "end": 124,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 120,
                    "end": 124
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 125,
                  "end": 127,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 138,
      "end": 191,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 145,
        "end": 191,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 159,
          "end": 170,
          "decorators": [],
          "name": "AmbientBase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 171,
          "end": 191,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 177,
              "end": 189,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 177,
                "end": 180,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 180,
                "end": 189,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 182,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 184,
                    "end": 188
                  }
                },
                "body": null,
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 193,
      "end": 296,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 200,
        "end": 296,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 214,
          "end": 228,
          "decorators": [],
          "name": "AmbientDerived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 237,
          "end": 248,
          "decorators": [],
          "name": "AmbientBase",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 249,
          "end": 296,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 255,
              "end": 267,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 255,
                "end": 258,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 258,
                "end": 267,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 260,
                  "end": 266,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 262,
                    "end": 266
                  }
                },
                "body": null,
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 273,
              "end": 294,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 282,
                "end": 285,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 285,
                "end": 294,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 287,
                  "end": 293,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 289,
                    "end": 293
                  }
                },
                "body": null,
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 305,
      "end": 514,
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 339,
        "decorators": [],
        "name": "ambientNamespace",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 359,
                "end": 370,
                "decorators": [],
                "name": "AmbientBase",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 371,
                "end": 399,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 381,
                    "end": 393,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 384,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 384,
                      "end": 393,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 386,
                        "end": 392,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 388,
                          "end": 392
                        }
                      },
                      "body": null,
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 405,
            "end": 512,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 412,
              "end": 512,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 418,
                "end": 432,
                "decorators": [],
                "name": "AmbientDerived",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 441,
                "end": 452,
                "decorators": [],
                "name": "AmbientBase",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 453,
                "end": 512,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 463,
                    "end": 475,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 463,
                      "end": 466,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 466,
                      "end": 475,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 468,
                        "end": 474,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 470,
                          "end": 474
                        }
                      },
                      "body": null,
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 485,
                    "end": 506,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 497,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 497,
                      "end": 506,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 499,
                        "end": 505,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 501,
                          "end": 505
                        }
                      },
                      "body": null,
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": true,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 536,
          "end": 550,
          "decorators": [],
          "name": "NonAmbientBase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 551,
          "end": 573,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 557,
              "end": 571,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 557,
                "end": 560,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 560,
                "end": 571,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 562,
                  "end": 568,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 564,
                    "end": 568
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 569,
                  "end": 571,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 575,
      "end": 680,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 582,
        "end": 680,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 588,
          "end": 605,
          "decorators": [],
          "name": "NonAmbientDerived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 614,
          "end": 628,
          "decorators": [],
          "name": "NonAmbientBase",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 629,
          "end": 680,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 635,
              "end": 649,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 635,
                "end": 638,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 638,
                "end": 649,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 640,
                  "end": 646,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 642,
                    "end": 646
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 647,
                  "end": 649,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 655,
              "end": 678,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 664,
                "end": 667,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 667,
                "end": 678,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 669,
                  "end": 675,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 671,
                    "end": 675
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 676,
                  "end": 678,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
