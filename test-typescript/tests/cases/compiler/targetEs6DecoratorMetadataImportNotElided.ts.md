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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 32,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 21,
          "name": "Input",
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
          "start": 29,
          "end": 32,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 61,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 40,
        "end": 61,
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 57,
          "name": "TemplateRef",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 58,
          "end": 61,
          "body": []
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
  "end": 203,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "Input",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "Input",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 27,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 27,
            "name": "TemplateRef",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 27,
            "name": "TemplateRef",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 43,
        "value": "./deps",
        "raw": "'./deps'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 202,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 53,
        "end": 202,
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 70,
          "name": "MyComponent",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 71,
          "end": 202,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 77,
              "end": 95,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 77,
                "end": 81,
                "name": "_ref",
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
                    "name": "TemplateRef",
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
              "start": 101,
              "end": 145,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 118,
                "end": 121,
                "name": "ref",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 121,
                "end": 145,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 133,
                          "end": 137
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 142,
                          "name": "_ref",
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
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 101,
                  "end": 109,
                  "expression": {
                    "type": "CallExpression",
                    "start": 102,
                    "end": 109,
                    "callee": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 107,
                      "name": "Input",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 150,
              "end": 200,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 154,
                "end": 157,
                "name": "ref",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 157,
                "end": 200,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 158,
                    "end": 176,
                    "name": "value",
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
                          "name": "TemplateRef",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                          "object": {
                            "type": "ThisExpression",
                            "start": 180,
                            "end": 184
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 189,
                            "name": "_ref",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 197,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "directive": null
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
