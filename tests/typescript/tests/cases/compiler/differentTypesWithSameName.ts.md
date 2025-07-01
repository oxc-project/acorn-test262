__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "variable",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 34
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 40,
                      "end": 41
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 43,
                        "end": 49
                      },
                      "start": 41,
                      "end": 49
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
                    "start": 40,
                    "end": 50
                  }
                ],
                "start": 34,
                "end": 54
              },
              "abstract": false,
              "declare": false,
              "start": 20,
              "end": 54
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 13,
            "end": 54
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "doSomething",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 84
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 89
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "variable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 90,
                          "end": 98
                        },
                        "start": 88,
                        "end": 98
                      },
                      "typeArguments": null,
                      "start": 88,
                      "end": 98
                    },
                    "start": 86,
                    "end": 98
                  },
                  "start": 85,
                  "end": 98
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 100,
                "end": 110
              },
              "expression": false,
              "start": 64,
              "end": 110
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 57,
            "end": 110
          }
        ],
        "start": 9,
        "end": 112
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 112
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "variable",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 128
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
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 135,
                "end": 141
              },
              "start": 133,
              "end": 141
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
            "start": 132,
            "end": 142
          }
        ],
        "start": 129,
        "end": 144
      },
      "abstract": false,
      "declare": false,
      "start": 114,
      "end": 144
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 162
                },
                "typeArguments": null,
                "start": 154,
                "end": 162
              },
              "start": 152,
              "end": 162
            },
            "start": 151,
            "end": 162
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "variable",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 177
            },
            "typeArguments": null,
            "arguments": [],
            "start": 165,
            "end": 179
          },
          "definite": false,
          "start": 151,
          "end": 179
        }
      ],
      "declare": false,
      "start": 147,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 182
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 194
          },
          "optional": false,
          "computed": false,
          "start": 181,
          "end": 194
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 196
          }
        ],
        "optional": false,
        "start": 181,
        "end": 197
      },
      "directive": null,
      "start": 181,
      "end": 198
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 198
}
```
