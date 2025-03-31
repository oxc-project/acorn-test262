__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 39,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 17,
            "name": "MyFunction",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 38,
        "value": "./MyComponent",
        "raw": "\"./MyComponent\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 74,
      "expression": {
        "type": "CallExpression",
        "start": 41,
        "end": 73,
        "callee": {
          "type": "Identifier",
          "start": 41,
          "end": 51,
          "name": "MyFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 52,
            "end": 72,
            "properties": [
              {
                "type": "Property",
                "start": 53,
                "end": 71,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 56,
                  "name": "msg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 58,
                  "end": 71,
                  "value": "Hello World",
                  "raw": "\"Hello World\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
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
  "end": 153,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "name": "MyFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 37,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 35,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "name": "msg",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 126,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 126,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 125,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 62,
              "name": "MyFunction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 65,
              "end": 125,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 66,
                  "end": 85,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 68,
                      "end": 71,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 71,
                        "name": "msg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 71,
                        "name": "msg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 73,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 75,
                      "end": 85,
                      "typeName": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 85,
                        "name": "MyFunction",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "body": {
                "type": "CallExpression",
                "start": 90,
                "end": 125,
                "callee": {
                  "type": "MemberExpression",
                  "start": 90,
                  "end": 101,
                  "object": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 97,
                    "name": "console",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 101,
                    "name": "log",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "TemplateLiteral",
                    "start": 102,
                    "end": 124,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 118,
                        "end": 121,
                        "name": "msg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 102,
                        "end": 118,
                        "value": {
                          "cooked": "Got message \"",
                          "raw": "Got message \""
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 121,
                        "end": 124,
                        "value": {
                          "cooked": "\"",
                          "raw": "\""
                        },
                        "tail": true
                      }
                    ]
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 127,
      "end": 153,
      "declaration": {
        "type": "Identifier",
        "start": 142,
        "end": 152,
        "name": "MyFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
