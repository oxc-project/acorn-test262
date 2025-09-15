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
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 20
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
                },
                "start": 20,
                "end": 28
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 17,
              "end": 29
            }
          ],
          "start": 15,
          "end": 31
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 31
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 32
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "simpleVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 56
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 56
        }
      ],
      "declare": false,
      "start": 43,
      "end": 57
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anotherVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 75,
                "end": 78
              },
              "start": 73,
              "end": 78
            },
            "start": 63,
            "end": 78
          },
          "init": null,
          "definite": false,
          "start": 63,
          "end": 78
        }
      ],
      "declare": false,
      "start": 59,
      "end": 79
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "varWithSimpleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              },
              "start": 101,
              "end": 109
            },
            "start": 84,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 84,
          "end": 109
        }
      ],
      "declare": false,
      "start": 80,
      "end": 110
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "varWithArrayType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 133,
                  "end": 139
                },
                "start": 133,
                "end": 141
              },
              "start": 131,
              "end": 141
            },
            "start": 115,
            "end": 141
          },
          "init": null,
          "definite": false,
          "start": 115,
          "end": 141
        }
      ],
      "declare": false,
      "start": 111,
      "end": 142
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "varWithInitialValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 167
          },
          "init": {
            "type": "Literal",
            "value": 30,
            "raw": "30",
            "start": 170,
            "end": 172
          },
          "definite": false,
          "start": 148,
          "end": 172
        }
      ],
      "declare": false,
      "start": 144,
      "end": 173
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "withComplicatedValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 199
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 205
                },
                "value": {
                  "type": "Literal",
                  "value": 30,
                  "raw": "30",
                  "start": 207,
                  "end": 209
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 204,
                "end": 209
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 212
                },
                "value": {
                  "type": "Literal",
                  "value": 70,
                  "raw": "70",
                  "start": 214,
                  "end": 216
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 211,
                "end": 216
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "desc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 222
                },
                "value": {
                  "type": "Literal",
                  "value": "position",
                  "raw": "\"position\"",
                  "start": 224,
                  "end": 234
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 218,
                "end": 234
              }
            ],
            "start": 202,
            "end": 236
          },
          "definite": false,
          "start": 179,
          "end": 236
        }
      ],
      "declare": false,
      "start": 175,
      "end": 237
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 262
          },
          "init": null,
          "definite": false,
          "start": 251,
          "end": 262
        }
      ],
      "declare": true,
      "start": 239,
      "end": 263
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "declareVar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 287
          },
          "init": null,
          "definite": false,
          "start": 276,
          "end": 287
        }
      ],
      "declare": true,
      "start": 264,
      "end": 287
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 312
          },
          "init": null,
          "definite": false,
          "start": 301,
          "end": 312
        }
      ],
      "declare": true,
      "start": 289,
      "end": 313
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "deckareVarWithType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 346,
                "end": 352
              },
              "start": 344,
              "end": 352
            },
            "start": 326,
            "end": 352
          },
          "init": null,
          "definite": false,
          "start": 326,
          "end": 352
        }
      ],
      "declare": true,
      "start": 314,
      "end": 353
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arrayVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 369,
                  "end": 375
                },
                "start": 369,
                "end": 377
              },
              "start": 367,
              "end": 377
            },
            "start": 359,
            "end": 377
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 381,
                "end": 384
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 386,
                "end": 389
              }
            ],
            "start": 380,
            "end": 390
          },
          "definite": false,
          "start": 359,
          "end": 390
        }
      ],
      "declare": false,
      "start": 355,
      "end": 391
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "simpleFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 417
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 443,
                    "end": 444
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Hello",
                    "raw": "\"Hello\"",
                    "start": 446,
                    "end": 453
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 443,
                  "end": 453
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 463,
                    "end": 464
                  },
                  "value": {
                    "type": "Literal",
                    "value": "word",
                    "raw": "\"word\"",
                    "start": 466,
                    "end": 472
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 463,
                  "end": 472
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 482,
                    "end": 483
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 485,
                    "end": 486
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 482,
                  "end": 486
                }
              ],
              "start": 433,
              "end": 492
            },
            "start": 426,
            "end": 493
          }
        ],
        "start": 420,
        "end": 495
      },
      "expression": false,
      "start": 394,
      "end": 495
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 507,
        "end": 509
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 535
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "Hello",
                      "raw": "\"Hello\"",
                      "start": 555,
                      "end": 562
                    },
                    "start": 548,
                    "end": 563
                  }
                ],
                "start": 538,
                "end": 569
              },
              "expression": false,
              "start": 523,
              "end": 569
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 516,
            "end": 569
          }
        ],
        "start": 510,
        "end": 571
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 497,
      "end": 571
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 580,
        "end": 582
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "withImportDecl_0",
          "raw": "\"withImportDecl_0\"",
          "start": 593,
          "end": 611
        },
        "start": 585,
        "end": 612
      },
      "importKind": "value",
      "start": 573,
      "end": 613
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 619,
            "end": 620
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 629
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 631
              },
              "optional": false,
              "computed": false,
              "start": 627,
              "end": 631
            },
            "typeArguments": null,
            "arguments": [],
            "start": 623,
            "end": 633
          },
          "definite": false,
          "start": 619,
          "end": 633
        }
      ],
      "declare": false,
      "start": 615,
      "end": 634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 635,
          "end": 636
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 637,
          "end": 640
        },
        "optional": false,
        "computed": false,
        "start": 635,
        "end": 640
      },
      "directive": null,
      "start": 635,
      "end": 641
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 43,
  "end": 641
}
```
