__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 639,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "name": "privateClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 22,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 52,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 52,
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 48,
          "name": "publicClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 52,
          "body": []
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
      "start": 54,
      "end": 638,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 61,
        "end": 638,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 107,
          "name": "publicClassWithWithPrivateTypeParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 108,
          "end": 638,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 114,
              "end": 215,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 129,
                "end": 151,
                "name": "myPrivateStaticMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 151,
                "end": 215,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 178,
                  "end": 215,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 151,
                  "end": 175,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 152,
                      "end": 174,
                      "name": {
                        "type": "Identifier",
                        "start": 152,
                        "end": 153,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 162,
                        "end": 174,
                        "typeName": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 174,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 220,
              "end": 308,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 228,
                "end": 244,
                "name": "myPrivateMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 244,
                "end": 308,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 271,
                  "end": 308,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 244,
                  "end": 268,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 245,
                      "end": 267,
                      "name": {
                        "type": "Identifier",
                        "start": 245,
                        "end": 246,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 255,
                        "end": 267,
                        "typeName": {
                          "type": "Identifier",
                          "start": 255,
                          "end": 267,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 313,
              "end": 413,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 328,
                "end": 350,
                "name": "myPrivateStaticMethod2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 350,
                "end": 413,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 376,
                  "end": 413,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 350,
                  "end": 373,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 351,
                      "end": 372,
                      "name": {
                        "type": "Identifier",
                        "start": 351,
                        "end": 352,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 361,
                        "end": 372,
                        "typeName": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 372,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 418,
              "end": 505,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 426,
                "end": 442,
                "name": "myPrivateMethod2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 442,
                "end": 505,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 468,
                  "end": 505,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 442,
                  "end": 465,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 443,
                      "end": 464,
                      "name": {
                        "type": "Identifier",
                        "start": 443,
                        "end": 444,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 453,
                        "end": 464,
                        "typeName": {
                          "type": "Identifier",
                          "start": 453,
                          "end": 464,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 510,
              "end": 577,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 524,
                "end": 544,
                "name": "myPublicStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 544,
                "end": 577,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 570,
                  "end": 577,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 544,
                  "end": 567,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 545,
                      "end": 566,
                      "name": {
                        "type": "Identifier",
                        "start": 545,
                        "end": 546,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 555,
                        "end": 566,
                        "typeName": {
                          "type": "Identifier",
                          "start": 555,
                          "end": 566,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 582,
              "end": 636,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 589,
                "end": 603,
                "name": "myPublicMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 603,
                "end": 636,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 629,
                  "end": 636,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 603,
                  "end": 626,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 604,
                      "end": 625,
                      "name": {
                        "type": "Identifier",
                        "start": 604,
                        "end": 605,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 614,
                        "end": 625,
                        "typeName": {
                          "type": "Identifier",
                          "start": 614,
                          "end": 625,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
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
