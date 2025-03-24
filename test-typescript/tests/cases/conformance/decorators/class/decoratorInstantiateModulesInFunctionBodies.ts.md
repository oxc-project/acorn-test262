__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 39,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 14,
      "end": 38,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 21,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 25,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 32,
              "end": 37,
              "value": "abc",
              "raw": "'abc'"
            },
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
  "end": 234,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "value": "./a",
        "raw": "'./a'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 29,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 44,
        "name": "filter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 45,
          "end": 57,
          "name": "handler",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 57,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 54,
              "end": 57
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 141,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 65,
            "end": 139,
            "argument": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 138,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 82,
                  "end": 93,
                  "name": "target",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 95,
                  "end": 114,
                  "name": "propertyKey",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 106,
                    "end": 114,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 108,
                      "end": 114
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 138,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 143,
      "end": 234,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 152,
        "name": "Wat",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 153,
        "end": 234,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 232,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 207,
              "name": "whatever",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 207,
              "end": 232,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 210,
                "end": 232,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 159,
                "end": 187,
                "expression": {
                  "type": "CallExpression",
                  "start": 160,
                  "end": 187,
                  "callee": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 166,
                    "name": "filter",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 167,
                      "end": 186,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BinaryExpression",
                        "start": 173,
                        "end": 186,
                        "left": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 177,
                          "name": "test",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "==",
                        "right": {
                          "type": "Literal",
                          "start": 181,
                          "end": 186,
                          "value": "abc",
                          "raw": "'abc'"
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
