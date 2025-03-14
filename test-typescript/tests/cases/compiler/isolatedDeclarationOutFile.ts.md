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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 93,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 93,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 91,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 28,
                "decorators": [],
                "name": "toUpper",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 28,
                "end": 91,
                "async": false,
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
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 67,
                          "end": 82,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 70,
                            "decorators": [],
                            "name": "msg",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 71,
                            "end": 82,
                            "decorators": [],
                            "name": "toUpperCase",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
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
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
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
  "end": 175,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "\"./a\"",
        "value": "./a"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 122,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 33,
        "end": 122,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 51,
          "end": 122,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 57,
              "end": 120,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 57,
                "end": 64,
                "decorators": [],
                "name": "toFixed",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 64,
                "end": 120,
                "async": false,
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
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 111,
                            "end": 112,
                            "raw": "6",
                            "value": 6
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 101,
                          "end": 110,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 102,
                            "decorators": [],
                            "name": "n",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 110,
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
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
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 174,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 131,
        "end": 174,
        "async": false,
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
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 140,
          "end": 145,
          "decorators": [],
          "name": "makeB",
          "optional": false
        },
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
              "optional": false
            }
          }
        }
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
