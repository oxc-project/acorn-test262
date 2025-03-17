__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 137,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 135,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 30,
              "end": 135,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 42,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 43,
                "end": 135,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 53,
                    "end": 129,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 60,
                      "end": 129,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 64,
                          "end": 129,
                          "id": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 129,
                            "name": "Origin",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 70,
                              "end": 129,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 72,
                                "end": 129,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 86,
                                    "end": 96,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 86,
                                      "end": 87,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 87,
                                      "end": 95,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 89,
                                        "end": 95
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 109,
                                    "end": 119,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 109,
                                      "end": 110,
                                      "name": "y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 110,
                                      "end": 118,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 112,
                                        "end": 118
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 103,
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
        "end": 103,
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 32,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 32,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 32,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 9,
                    "end": 19,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 10,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10,
                      "end": 18,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 12,
                        "end": 18
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 20,
                    "end": 30,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 21,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 21,
                      "end": 29,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 23,
                        "end": 29
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 33,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 41,
            "end": 55,
            "object": {
              "type": "MemberExpression",
              "start": 41,
              "end": 48,
              "object": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 48,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 55,
              "name": "Origin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 65,
            "end": 82,
            "callee": {
              "type": "MemberExpression",
              "start": 69,
              "end": 76,
              "object": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 71,
                "end": 76,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 77,
                "end": 78,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 80,
                "end": 81,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
