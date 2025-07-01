__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Input",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 21
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 25,
            "end": 28
          },
          "start": 23,
          "end": 28
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 29,
          "end": 32
        },
        "expression": false,
        "start": 7,
        "end": 32
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 32
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TemplateRef",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 57
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 58,
          "end": 61
        },
        "abstract": false,
        "declare": false,
        "start": 40,
        "end": 61
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 61
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 62
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Input",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Input",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "TemplateRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 27
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "TemplateRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 27
          },
          "importKind": "value",
          "start": 16,
          "end": 27
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./deps",
        "raw": "'./deps'",
        "start": 35,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 44
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 70
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_ref",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 81
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TemplateRef",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 94
                  },
                  "typeArguments": null,
                  "start": 83,
                  "end": 94
                },
                "start": 81,
                "end": 94
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 77,
              "end": 95
            },
            {
              "type": "MethodDefinition",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 107
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 102,
                    "end": 109
                  },
                  "start": 101,
                  "end": 109
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ref",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 121
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 133,
                          "end": 137
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_ref",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 138,
                          "end": 142
                        },
                        "optional": false,
                        "computed": false,
                        "start": 133,
                        "end": 142
                      },
                      "start": 126,
                      "end": 143
                    }
                  ],
                  "start": 124,
                  "end": 145
                },
                "expression": false,
                "start": 121,
                "end": 145
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 101,
              "end": 145
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ref",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 157
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TemplateRef",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 165,
                          "end": 176
                        },
                        "typeArguments": null,
                        "start": 165,
                        "end": 176
                      },
                      "start": 163,
                      "end": 176
                    },
                    "start": 158,
                    "end": 176
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 180,
                            "end": 184
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 185,
                            "end": 189
                          },
                          "optional": false,
                          "computed": false,
                          "start": 180,
                          "end": 189
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 192,
                          "end": 197
                        },
                        "start": 180,
                        "end": 197
                      },
                      "directive": null,
                      "start": 180,
                      "end": 198
                    }
                  ],
                  "start": 178,
                  "end": 200
                },
                "expression": false,
                "start": 157,
                "end": 200
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 150,
              "end": 200
            }
          ],
          "start": 71,
          "end": 202
        },
        "abstract": false,
        "declare": false,
        "start": 53,
        "end": 202
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 46,
      "end": 202
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 202
}
```
