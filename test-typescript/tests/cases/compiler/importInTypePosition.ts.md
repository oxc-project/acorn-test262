__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 423,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 144,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 101,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 101,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 33,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 101,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 44,
                    "end": 95,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 55,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 55,
                      "end": 95,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 56,
                          "end": 72,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 63,
                            "end": 72,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 64,
                              "end": 72,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 66,
                                "end": 72
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 74,
                          "end": 90,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 90,
                            "name": "y",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 82,
                              "end": 90,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 84,
                                "end": 90
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 92,
                        "end": 95,
                        "body": []
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
            "start": 106,
            "end": 142,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 113,
              "end": 142,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 117,
                  "end": 141,
                  "id": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 123,
                    "name": "Origin",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 126,
                    "end": 141,
                    "callee": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 135,
                      "name": "Point",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 136,
                        "end": 137,
                        "value": 0,
                        "raw": "0"
                      },
                      {
                        "type": "Literal",
                        "start": 139,
                        "end": 140,
                        "value": 0,
                        "raw": "0"
                      }
                    ],
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 170,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 179,
        "end": 249,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 186,
            "end": 199,
            "id": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 274,
      "end": 422,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 282,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 283,
        "end": 422,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 290,
            "end": 303,
            "id": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 356,
            "end": 372,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 360,
                "end": 371,
                "id": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 371,
                  "name": "m",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 361,
                    "end": 371,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 363,
                      "end": 371,
                      "exprName": {
                        "type": "Identifier",
                        "start": 370,
                        "end": 371,
                        "name": "a",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 377,
            "end": 392,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 381,
                "end": 391,
                "id": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 391,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 382,
                    "end": 391,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 384,
                      "end": 391,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 384,
                        "end": 391,
                        "left": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 385,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 386,
                          "end": 391,
                          "name": "Point",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 397,
            "end": 420,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 401,
                "end": 419,
                "id": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 402,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 405,
                  "end": 419,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 407,
                      "end": 411,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 407,
                        "end": 408,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 410,
                        "end": 411,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 413,
                      "end": 417,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 413,
                        "end": 414,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 416,
                        "end": 417,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
