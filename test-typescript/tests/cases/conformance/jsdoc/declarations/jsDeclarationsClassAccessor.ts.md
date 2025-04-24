__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 11,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 122,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 43,
        "end": 122,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 49,
            "end": 120,
            "body": {
              "type": "TSInterfaceBody",
              "start": 68,
              "end": 120,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 78,
                  "end": 91,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 85,
                    "decorators": [],
                    "name": "idlType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 87,
                      "end": 90
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 100,
                  "end": 114,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 107,
                    "decorators": [],
                    "name": "default",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 109,
                      "end": 113
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 67,
              "decorators": [],
              "name": "Argument",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 27,
        "end": 42,
        "raw": "\"./argument.js\"",
        "value": "./argument.js"
      }
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
  "end": 169,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 169,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 169,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 18,
          "end": 169,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 24,
              "end": 41,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 24,
                "end": 35,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 35,
                "end": 41,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 38,
                  "end": 41,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 47,
              "end": 167,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 53,
                "decorators": [],
                "name": "toJSON",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 53,
                "end": 167,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 56,
                  "end": 167,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 66,
                      "end": 140,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 72,
                          "end": 139,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 72,
                            "end": 76,
                            "decorators": [],
                            "name": "json",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "start": 79,
                            "end": 139,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 81,
                                "end": 96,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 81,
                                  "end": 85,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Identifier",
                                  "start": 87,
                                  "end": 96,
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "Property",
                                "start": 98,
                                "end": 113,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 98,
                                  "end": 102,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Identifier",
                                  "start": 104,
                                  "end": 113,
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "Property",
                                "start": 115,
                                "end": 137,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 115,
                                  "end": 126,
                                  "decorators": [],
                                  "name": "inheritance",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Identifier",
                                  "start": 128,
                                  "end": 137,
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 149,
                      "end": 161,
                      "argument": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 160,
                        "decorators": [],
                        "name": "json",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 17,
          "decorators": [],
          "name": "Base",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 283,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 32,
        "raw": "\"./base.js\"",
        "value": "./base.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 283,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 41,
        "end": 283,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 69,
          "end": 283,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 119,
              "end": 166,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 126,
                "end": 131,
                "decorators": [],
                "name": "parse",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 131,
                "end": 166,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 143,
                  "end": 166,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 153,
                      "end": 160,
                      "argument": null
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 132,
                    "end": 141,
                    "decorators": [],
                    "name": "tokeniser",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 172,
              "end": 217,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 176,
                "end": 180,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 180,
                "end": 217,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 183,
                  "end": 217,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 193,
                      "end": 211,
                      "argument": {
                        "type": "Literal",
                        "start": 200,
                        "end": 210,
                        "raw": "\"argument\"",
                        "value": "argument"
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 262,
              "end": 281,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 263,
                "end": 271,
                "decorators": [],
                "name": "validate",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 271,
                "end": 281,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 278,
                  "end": 281,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": true,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 272,
                    "end": 276,
                    "decorators": [],
                    "name": "defs",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 55,
          "decorators": [],
          "name": "Argument",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 64,
          "end": 68,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        },
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
