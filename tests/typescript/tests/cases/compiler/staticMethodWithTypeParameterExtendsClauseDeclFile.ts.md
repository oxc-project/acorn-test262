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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 22,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 52,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 52,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 52,
          "body": []
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
      "start": 54,
      "end": 638,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 61,
        "end": 638,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 108,
          "end": 638,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 114,
              "end": 215,
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
              "value": {
                "type": "FunctionExpression",
                "start": 151,
                "end": 215,
                "id": null,
                "generator": false,
                "async": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 162,
                        "end": 174,
                        "typeName": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 174,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
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
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 178,
                  "end": 215,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 220,
              "end": 308,
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
              "value": {
                "type": "FunctionExpression",
                "start": 244,
                "end": 308,
                "id": null,
                "generator": false,
                "async": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 255,
                        "end": 267,
                        "typeName": {
                          "type": "Identifier",
                          "start": 255,
                          "end": 267,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
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
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 271,
                  "end": 308,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 313,
              "end": 413,
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
              "value": {
                "type": "FunctionExpression",
                "start": 350,
                "end": 413,
                "id": null,
                "generator": false,
                "async": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 361,
                        "end": 372,
                        "typeName": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 372,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
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
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 376,
                  "end": 413,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 418,
              "end": 505,
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
              "value": {
                "type": "FunctionExpression",
                "start": 442,
                "end": 505,
                "id": null,
                "generator": false,
                "async": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 453,
                        "end": 464,
                        "typeName": {
                          "type": "Identifier",
                          "start": 453,
                          "end": 464,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
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
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 468,
                  "end": 505,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 510,
              "end": 577,
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
              "value": {
                "type": "FunctionExpression",
                "start": 544,
                "end": 577,
                "id": null,
                "generator": false,
                "async": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 555,
                        "end": 566,
                        "typeName": {
                          "type": "Identifier",
                          "start": 555,
                          "end": 566,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
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
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 570,
                  "end": 577,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 582,
              "end": 636,
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
              "value": {
                "type": "FunctionExpression",
                "start": 603,
                "end": 636,
                "id": null,
                "generator": false,
                "async": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 614,
                        "end": 625,
                        "typeName": {
                          "type": "Identifier",
                          "start": 614,
                          "end": 625,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
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
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 629,
                  "end": 636,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
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
