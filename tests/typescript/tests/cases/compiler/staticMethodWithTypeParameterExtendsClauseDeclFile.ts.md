__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 638,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 22,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 52,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 52,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 52,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 48,
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 638,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 61,
        "end": 638,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 108,
          "end": 638,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 114,
              "end": 215,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 129,
                "end": 151,
                "decorators": [],
                "name": "myPrivateStaticMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 151,
                "end": 215,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 178,
                  "end": 215,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 151,
                  "end": 175,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 152,
                      "end": 174,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 162,
                        "end": 174,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 174,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 152,
                        "end": 153,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 220,
              "end": 308,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 228,
                "end": 244,
                "decorators": [],
                "name": "myPrivateMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 244,
                "end": 308,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 271,
                  "end": 308,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 244,
                  "end": 268,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 245,
                      "end": 267,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 255,
                        "end": 267,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 255,
                          "end": 267,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 245,
                        "end": 246,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 313,
              "end": 413,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 328,
                "end": 350,
                "decorators": [],
                "name": "myPrivateStaticMethod2",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 350,
                "end": 413,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 376,
                  "end": 413,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 350,
                  "end": 373,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 351,
                      "end": 372,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 361,
                        "end": 372,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 372,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 351,
                        "end": 352,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 418,
              "end": 505,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 426,
                "end": 442,
                "decorators": [],
                "name": "myPrivateMethod2",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 442,
                "end": 505,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 468,
                  "end": 505,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 442,
                  "end": 465,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 443,
                      "end": 464,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 453,
                        "end": 464,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 453,
                          "end": 464,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 443,
                        "end": 444,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 510,
              "end": 577,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 524,
                "end": 544,
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 544,
                "end": 577,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 570,
                  "end": 577,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 544,
                  "end": 567,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 545,
                      "end": 566,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 555,
                        "end": 566,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 555,
                          "end": 566,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 545,
                        "end": 546,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 582,
              "end": 636,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 589,
                "end": 603,
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 603,
                "end": 636,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 629,
                  "end": 636,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 603,
                  "end": 626,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 604,
                      "end": 625,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 614,
                        "end": 625,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 614,
                          "end": 625,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 604,
                        "end": 605,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 107,
          "decorators": [],
          "name": "publicClassWithWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
