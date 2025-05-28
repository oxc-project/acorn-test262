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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 93,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 91,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 28,
                "decorators": [],
                "name": "toUpper",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 28,
                "end": 91,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 29,
                    "end": 40,
                    "decorators": [],
                    "name": "msg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 32,
                      "end": 40,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 34,
                        "end": 40
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 41,
                  "end": 49,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 43,
                    "end": 49
                  }
                },
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
                            "decorators": [],
                            "name": "msg",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 71,
                            "end": 82,
                            "decorators": [],
                            "name": "toUpperCase",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
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
  "end": 174,
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
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 51,
          "end": 122,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 57,
              "end": 120,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 57,
                "end": 64,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 64,
                "end": 120,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 65,
                    "end": 74,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 66,
                      "end": 74,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 68,
                        "end": 74
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 75,
                  "end": 83,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 77,
                    "end": 83
                  }
                },
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
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 110,
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 111,
                            "end": 112,
                            "value": 6,
                            "raw": "6"
                          }
                        ],
                        "optional": false
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
          "decorators": [],
          "name": "makeB",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
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
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            }
          ]
        },
        "expression": false
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
