__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 58,
  "end": 268,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 118,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 79,
            "decorators": [],
            "name": "deprecatedRules",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 82,
            "end": 118,
            "properties": [
              {
                "type": "Property",
                "start": 86,
                "end": 116,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 86,
                  "end": 110,
                  "value": "jsx-sort-default-props",
                  "raw": "\"jsx-sort-default-props\""
                },
                "value": {
                  "type": "Literal",
                  "start": 112,
                  "end": 116,
                  "value": true,
                  "raw": "true"
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
      "type": "VariableDeclaration",
      "start": 120,
      "end": 160,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 134,
            "decorators": [],
            "name": "allRules",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 137,
            "end": 160,
            "properties": [
              {
                "type": "Property",
                "start": 141,
                "end": 158,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 141,
                  "end": 152,
                  "value": "no-unsafe",
                  "raw": "'no-unsafe'"
                },
                "value": {
                  "type": "Literal",
                  "start": 154,
                  "end": 158,
                  "value": true,
                  "raw": "true"
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
      "type": "ExpressionStatement",
      "start": 162,
      "end": 267,
      "expression": {
        "type": "AssignmentExpression",
        "start": 162,
        "end": 266,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 162,
          "end": 176,
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 168,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 169,
            "end": 176,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 179,
          "end": 266,
          "properties": [
            {
              "type": "Property",
              "start": 183,
              "end": 263,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 183,
                "end": 190,
                "decorators": [],
                "name": "plugins",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ObjectExpression",
                "start": 192,
                "end": 263,
                "properties": [
                  {
                    "type": "Property",
                    "start": 198,
                    "end": 258,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 203,
                      "decorators": [],
                      "name": "react",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 205,
                      "end": 258,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 213,
                          "end": 228,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 213,
                            "end": 228,
                            "decorators": [],
                            "name": "deprecatedRules",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 213,
                            "end": 228,
                            "decorators": [],
                            "name": "deprecatedRules",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 236,
                          "end": 251,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 236,
                            "end": 241,
                            "decorators": [],
                            "name": "rules",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 243,
                            "end": 251,
                            "decorators": [],
                            "name": "allRules",
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
  "start": 181,
  "end": 243,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 181,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 196,
        "decorators": [],
        "name": "config",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 197,
          "end": 207,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 200,
            "end": 207,
            "decorators": [],
            "name": "configs",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 209,
        "end": 212,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 242,
      "expression": {
        "type": "AssignmentExpression",
        "start": 214,
        "end": 241,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 214,
          "end": 228,
          "object": {
            "type": "Identifier",
            "start": 214,
            "end": 220,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 221,
            "end": 228,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 231,
          "end": 241,
          "properties": [
            {
              "type": "Property",
              "start": 233,
              "end": 239,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 233,
                "end": 239,
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 233,
                "end": 239,
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
  "end": 138,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 56,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 17,
            "decorators": [],
            "name": "eslintReact",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 20,
            "end": 55,
            "callee": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 28,
                "end": 54,
                "value": "./eslint-plugin-react.js",
                "raw": "'./eslint-plugin-react.js'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 108,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 71,
            "decorators": [],
            "name": "tseslint",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 74,
            "end": 107,
            "callee": {
              "type": "Identifier",
              "start": 74,
              "end": 81,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 82,
                "end": 106,
                "value": "./typescript-eslint.js",
                "raw": "'./typescript-eslint.js'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 138,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 138,
        "callee": {
          "type": "MemberExpression",
          "start": 110,
          "end": 125,
          "object": {
            "type": "Identifier",
            "start": 110,
            "end": 118,
            "decorators": [],
            "name": "tseslint",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 119,
            "end": 125,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 126,
            "end": 137,
            "decorators": [],
            "name": "eslintReact",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
