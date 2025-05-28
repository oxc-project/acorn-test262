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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 122,
      "id": {
        "type": "Literal",
        "start": 27,
        "end": 42,
        "value": "./argument.js",
        "raw": "\"./argument.js\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 43,
        "end": 122,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 49,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 67,
              "decorators": [],
              "name": "Argument",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 68,
              "end": 120,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 78,
                  "end": 91,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 85,
                    "decorators": [],
                    "name": "idlType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 87,
                      "end": 90
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 100,
                  "end": 114,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 107,
                    "decorators": [],
                    "name": "default",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 109,
                      "end": 113
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
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
  "end": 169,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 169,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 169,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 18,
          "end": 169,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 24,
              "end": 41,
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
              "value": {
                "type": "FunctionExpression",
                "start": 35,
                "end": 41,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 38,
                  "end": 41,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 47,
              "end": 167,
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
              "value": {
                "type": "FunctionExpression",
                "start": 53,
                "end": 167,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 56,
                  "end": 167,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 66,
                      "end": 140,
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 72,
                          "end": 139,
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
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 81,
                                  "end": 85,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Identifier",
                                  "start": 87,
                                  "end": 96,
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 98,
                                "end": 113,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 98,
                                  "end": 102,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Identifier",
                                  "start": 104,
                                  "end": 113,
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 115,
                                "end": 137,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 115,
                                  "end": 126,
                                  "decorators": [],
                                  "name": "inheritance",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Identifier",
                                  "start": 128,
                                  "end": 137,
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              }
                            ]
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
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
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 32,
        "value": "./base.js",
        "raw": "\"./base.js\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 283,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 41,
        "end": 283,
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
        "typeParameters": null,
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
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 69,
          "end": 283,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 119,
              "end": 166,
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
              "value": {
                "type": "FunctionExpression",
                "start": 131,
                "end": 166,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 172,
              "end": 217,
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
              "value": {
                "type": "FunctionExpression",
                "start": 180,
                "end": 217,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "value": "argument",
                        "raw": "\"argument\""
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 262,
              "end": 281,
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
              "value": {
                "type": "FunctionExpression",
                "start": 271,
                "end": 281,
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                "body": {
                  "type": "BlockStatement",
                  "start": 278,
                  "end": 281,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
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
