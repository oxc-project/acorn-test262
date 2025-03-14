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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 21,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 25,
            "end": 37,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 32,
              "end": 37,
              "raw": "'abc'",
              "value": "abc"
            }
          }
        ],
        "declare": false,
        "kind": "var"
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
  "end": 234,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "raw": "'./a'",
        "value": "./a"
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
            "name": "test",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "test",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 29,
      "end": 141,
      "async": false,
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
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 138,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 82,
                  "end": 93,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 95,
                  "end": 114,
                  "decorators": [],
                  "name": "propertyKey",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 106,
                    "end": 114,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 108,
                      "end": 114
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 44,
        "decorators": [],
        "name": "filter",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 45,
          "end": 57,
          "decorators": [],
          "name": "handler",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 57,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 54,
              "end": 57
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 143,
      "end": 234,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 153,
        "end": 234,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 232,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 159,
                "end": 187,
                "expression": {
                  "type": "CallExpression",
                  "start": 160,
                  "end": 187,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 167,
                      "end": 186,
                      "async": false,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 173,
                        "end": 186,
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 177,
                          "decorators": [],
                          "name": "test",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 181,
                          "end": 186,
                          "raw": "'abc'",
                          "value": "abc"
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 166,
                    "decorators": [],
                    "name": "filter",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 207,
              "decorators": [],
              "name": "whatever",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 207,
              "end": 232,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 210,
                "end": 232,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 152,
        "decorators": [],
        "name": "Wat",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
