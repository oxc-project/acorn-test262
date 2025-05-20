__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 332,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 332,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 332,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 84,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 23,
              "end": 84,
              "body": {
                "type": "TSInterfaceBody",
                "start": 39,
                "end": 84,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 49,
                    "end": 59,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 50,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 52,
                        "end": 58
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 68,
                    "end": 78,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 69,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 71,
                        "end": 77
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 38,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 127,
            "end": 169,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 134,
              "end": 169,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 138,
                  "end": 168,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 151,
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 144,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 146,
                        "end": 151,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 151,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 154,
                    "end": 168,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 156,
                        "end": 160,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 159,
                          "end": 160,
                          "raw": "0",
                          "value": 0
                        }
                      },
                      {
                        "type": "Property",
                        "start": 162,
                        "end": 166,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 163,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 165,
                          "end": 166,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 175,
            "end": 233,
            "body": {
              "type": "TSInterfaceBody",
              "start": 207,
              "end": 233,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 217,
                  "end": 227,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 218,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 218,
                    "end": 226,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 220,
                      "end": 226
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 201,
                "end": 206,
                "expression": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 206,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 185,
              "end": 192,
              "decorators": [],
              "name": "Point3d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 278,
            "end": 330,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 285,
              "end": 330,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 289,
                  "end": 329,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 306,
                    "decorators": [],
                    "name": "Origin3d",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 306,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 299,
                        "end": 306,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 299,
                          "end": 306,
                          "decorators": [],
                          "name": "Point3d",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 309,
                    "end": 329,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 311,
                        "end": 315,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 312,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 314,
                          "end": 315,
                          "raw": "0",
                          "value": 0
                        }
                      },
                      {
                        "type": "Property",
                        "start": 317,
                        "end": 321,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 318,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 320,
                          "end": 321,
                          "raw": "0",
                          "value": 0
                        }
                      },
                      {
                        "type": "Property",
                        "start": 323,
                        "end": 327,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 324,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 326,
                          "end": 327,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
