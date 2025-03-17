__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 578,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 36,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 43,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 253,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 51,
        "end": 253,
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 59,
          "name": "C2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 71,
          "end": 75,
          "name": "Base",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 85,
          "end": 253,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 91,
              "end": 101,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "name": "T",
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
                "start": 92,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 94,
                  "end": 100
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 106,
              "end": 251,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 106,
                "end": 117,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 117,
                "end": 251,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 118,
                    "end": 127,
                    "name": "T",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 121,
                        "end": 127
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 129,
                  "end": 251,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 139,
                      "end": 147,
                      "expression": {
                        "type": "CallExpression",
                        "start": 139,
                        "end": 146,
                        "callee": {
                          "type": "Super",
                          "start": 139,
                          "end": 144
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 184,
                      "end": 195,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 184,
                        "end": 194,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 184,
                          "end": 190,
                          "object": {
                            "type": "ThisExpression",
                            "start": 184,
                            "end": 188
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 190,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 194,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 229,
                      "end": 245,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 233,
                          "end": 244,
                          "id": {
                            "type": "Identifier",
                            "start": 233,
                            "end": 237,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 234,
                              "end": 237,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 236,
                                "end": 237,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 236,
                                  "end": 237,
                                  "name": "U",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 240,
                            "end": 244,
                            "value": null,
                            "raw": "null"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "let",
                      "declare": false
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
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 59,
          "end": 62,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 60,
              "end": 61,
              "name": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 75,
          "end": 84,
          "params": [
            {
              "type": "TSUnknownKeyword",
              "start": 76,
              "end": 83
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 269,
      "end": 282,
      "id": {
        "type": "Identifier",
        "start": 275,
        "end": 278,
        "name": "Leg",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 279,
        "end": 282,
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
      "type": "ClassDeclaration",
      "start": 283,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 292,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 304,
        "end": 307,
        "name": "Leg",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 308,
        "end": 419,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 314,
            "end": 325,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "TSAsExpression",
              "start": 318,
              "end": 325,
              "expression": {
                "type": "ObjectExpression",
                "start": 318,
                "end": 320,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 324,
                "end": 325,
                "typeName": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 325,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 405,
            "end": 417,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 405,
              "end": 408,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 411,
              "end": 417,
              "object": {
                "type": "ThisExpression",
                "start": 411,
                "end": 415
              },
              "property": {
                "type": "Identifier",
                "start": 416,
                "end": 417,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 292,
        "end": 295,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 293,
            "end": 294,
            "name": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 435,
      "end": 454,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 450,
        "name": "BaseClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 451,
        "end": 454,
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
      "type": "ClassDeclaration",
      "start": 455,
      "end": 578,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 465,
        "name": "Item",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 480,
        "end": 489,
        "name": "BaseClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 490,
        "end": 578,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 496,
            "end": 507,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 496,
              "end": 500,
              "name": "data",
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
              "start": 500,
              "end": 506,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 502,
                "end": 506,
                "typeName": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 506,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 512,
            "end": 576,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 519,
              "name": "getData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 519,
              "end": 576,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 522,
                "end": 576,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 553,
                    "end": 570,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 560,
                      "end": 569,
                      "object": {
                        "type": "ThisExpression",
                        "start": 560,
                        "end": 564
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 565,
                        "end": 569,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 465,
        "end": 471,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 466,
            "end": 470,
            "name": {
              "type": "Identifier",
              "start": 466,
              "end": 470,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
