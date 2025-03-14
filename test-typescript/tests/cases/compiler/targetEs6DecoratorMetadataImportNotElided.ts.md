__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 32,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 29,
          "end": 32,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 21,
          "decorators": [],
          "name": "Input",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 23,
          "end": 28,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 25,
            "end": 28
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 61,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 40,
        "end": 61,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 58,
          "end": 61,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 57,
          "decorators": [],
          "name": "TemplateRef",
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
  "end": 203,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 43,
        "raw": "'./deps'",
        "value": "./deps"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Input",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Input",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 27,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 27,
            "decorators": [],
            "name": "TemplateRef",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 27,
            "decorators": [],
            "name": "TemplateRef",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 202,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 53,
        "end": 202,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 71,
          "end": 202,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 77,
              "end": 95,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 77,
                "end": 81,
                "decorators": [],
                "name": "_ref",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 81,
                "end": 94,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 83,
                  "end": 94,
                  "typeName": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 94,
                    "decorators": [],
                    "name": "TemplateRef",
                    "optional": false
                  }
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 101,
              "end": 145,
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 101,
                  "end": 109,
                  "expression": {
                    "type": "CallExpression",
                    "start": 102,
                    "end": 109,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 107,
                      "decorators": [],
                      "name": "Input",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 118,
                "end": 121,
                "decorators": [],
                "name": "ref",
                "optional": false
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 121,
                "end": 145,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 124,
                  "end": 145,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 126,
                      "end": 143,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 133,
                        "end": 142,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 133,
                          "end": 137
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 142,
                          "decorators": [],
                          "name": "_ref",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 150,
              "end": 200,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 154,
                "end": 157,
                "decorators": [],
                "name": "ref",
                "optional": false
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 157,
                "end": 200,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 178,
                  "end": 200,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 180,
                      "end": 198,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 180,
                        "end": 197,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 180,
                          "end": 189,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 180,
                            "end": 184
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 189,
                            "decorators": [],
                            "name": "_ref",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 197,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        }
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
                    "start": 158,
                    "end": 176,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 163,
                      "end": 176,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 176,
                        "typeName": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 176,
                          "decorators": [],
                          "name": "TemplateRef",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 70,
          "decorators": [],
          "name": "MyComponent",
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
