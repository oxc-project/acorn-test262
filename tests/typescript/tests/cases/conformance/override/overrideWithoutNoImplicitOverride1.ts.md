__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AmbientClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 33
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "yadda",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 54
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 58,
                    "end": 62
                  },
                  "start": 56,
                  "end": 62
                },
                "body": null,
                "expression": false,
                "start": 54,
                "end": 63
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null,
              "start": 40,
              "end": 63
            }
          ],
          "start": 34,
          "end": 65
        },
        "abstract": false,
        "declare": true,
        "start": 7,
        "end": 65
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 65
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonAmbientClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 95
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "yadda",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 116
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 120,
                    "end": 124
                  },
                  "start": 118,
                  "end": 124
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 125,
                  "end": 127
                },
                "expression": false,
                "start": 116,
                "end": 127
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null,
              "start": 102,
              "end": 127
            }
          ],
          "start": 96,
          "end": 129
        },
        "abstract": false,
        "declare": false,
        "start": 74,
        "end": 129
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 67,
      "end": 129
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AmbientBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 159,
          "end": 170
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 180
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 184,
                    "end": 188
                  },
                  "start": 182,
                  "end": 188
                },
                "body": null,
                "expression": false,
                "start": 180,
                "end": 189
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 177,
              "end": 189
            }
          ],
          "start": 171,
          "end": 191
        },
        "abstract": false,
        "declare": true,
        "start": 145,
        "end": 191
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 138,
      "end": 191
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AmbientDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 228
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "AmbientBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 248
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 258
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 262,
                    "end": 266
                  },
                  "start": 260,
                  "end": 266
                },
                "body": null,
                "expression": false,
                "start": 258,
                "end": 267
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 255,
              "end": 267
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 285
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 289,
                    "end": 293
                  },
                  "start": 287,
                  "end": 293
                },
                "body": null,
                "expression": false,
                "start": 285,
                "end": 294
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null,
              "start": 273,
              "end": 294
            }
          ],
          "start": 249,
          "end": 296
        },
        "abstract": false,
        "declare": true,
        "start": 200,
        "end": 296
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 193,
      "end": 296
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ambientNamespace",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 339
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AmbientBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 370
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 381,
                      "end": 384
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 388,
                          "end": 392
                        },
                        "start": 386,
                        "end": 392
                      },
                      "body": null,
                      "expression": false,
                      "start": 384,
                      "end": 393
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 381,
                    "end": 393
                  }
                ],
                "start": 371,
                "end": 399
              },
              "abstract": false,
              "declare": false,
              "start": 353,
              "end": 399
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 346,
            "end": 399
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AmbientDerived",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 432
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "AmbientBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 441,
                "end": 452
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 463,
                      "end": 466
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 470,
                          "end": 474
                        },
                        "start": 468,
                        "end": 474
                      },
                      "body": null,
                      "expression": false,
                      "start": 466,
                      "end": 475
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 463,
                    "end": 475
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 497
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 501,
                          "end": 505
                        },
                        "start": 499,
                        "end": 505
                      },
                      "body": null,
                      "expression": false,
                      "start": 497,
                      "end": 506
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": true,
                    "optional": false,
                    "accessibility": null,
                    "start": 485,
                    "end": 506
                  }
                ],
                "start": 453,
                "end": 512
              },
              "abstract": false,
              "declare": false,
              "start": 412,
              "end": 512
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 405,
            "end": 512
          }
        ],
        "start": 340,
        "end": 514
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 305,
      "end": 514
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonAmbientBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 536,
          "end": 550
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 560
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 564,
                    "end": 568
                  },
                  "start": 562,
                  "end": 568
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 569,
                  "end": 571
                },
                "expression": false,
                "start": 560,
                "end": 571
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 557,
              "end": 571
            }
          ],
          "start": 551,
          "end": 573
        },
        "abstract": false,
        "declare": false,
        "start": 530,
        "end": 573
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 523,
      "end": 573
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonAmbientDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 588,
          "end": 605
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonAmbientBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 614,
          "end": 628
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 638
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 642,
                    "end": 646
                  },
                  "start": 640,
                  "end": 646
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 647,
                  "end": 649
                },
                "expression": false,
                "start": 638,
                "end": 649
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 635,
              "end": 649
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 664,
                "end": 667
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 671,
                    "end": 675
                  },
                  "start": 669,
                  "end": 675
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 676,
                  "end": 678
                },
                "expression": false,
                "start": 667,
                "end": 678
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null,
              "start": 655,
              "end": 678
            }
          ],
          "start": 629,
          "end": 680
        },
        "abstract": false,
        "declare": false,
        "start": 582,
        "end": 680
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 575,
      "end": 680
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 680
}
```
