__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 93,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 93,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 93,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 91,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 28,
                "name": "toUpper",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 28,
                "end": 91,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 29,
                    "end": 40,
                    "name": "msg",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 32,
                      "end": 40,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 34,
                        "end": 40
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 50,
                  "end": 91,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 60,
                      "end": 85,
                      "argument": {
                        "type": "CallExpression",
                        "start": 67,
                        "end": 84,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 67,
                          "end": 82,
                          "object": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 70,
                            "name": "msg",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 71,
                            "end": 82,
                            "name": "toUpperCase",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 41,
                  "end": 49,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 43,
                    "end": 49
                  }
                }
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
  "end": 175,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 122,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 33,
        "end": 122,
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 51,
          "end": 122,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 57,
              "end": 120,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 57,
                "end": 64,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 64,
                "end": 120,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 65,
                    "end": 74,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 66,
                      "end": 74,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 68,
                        "end": 74
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 84,
                  "end": 120,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 94,
                      "end": 114,
                      "argument": {
                        "type": "CallExpression",
                        "start": 101,
                        "end": 113,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 101,
                          "end": 110,
                          "object": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 102,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 110,
                            "name": "toFixed",
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
                            "start": 111,
                            "end": 112,
                            "value": 6,
                            "raw": "6"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 75,
                  "end": 83,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 77,
                    "end": 83
                  }
                }
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
      "start": 124,
      "end": 174,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 131,
        "end": 174,
        "id": {
          "type": "Identifier",
          "start": 140,
          "end": 145,
          "name": "makeB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 151,
          "end": 174,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 157,
              "end": 172,
              "argument": {
                "type": "NewExpression",
                "start": 164,
                "end": 171,
                "callee": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 147,
          "end": 150,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 149,
            "end": 150,
            "typeName": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
