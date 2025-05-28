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
            "decorators": [],
            "name": "MyFunction",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "MyFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 56,
                  "decorators": [],
                  "name": "msg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 58,
                  "end": 71,
                  "value": "Hello World",
                  "raw": "\"Hello World\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
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
        "decorators": [],
        "name": "MyFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "msg",
              "optional": false,
              "typeAnnotation": null
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 125,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 62,
              "decorators": [],
              "name": "MyFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 65,
              "end": 125,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 66,
                  "end": 85,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 68,
                      "end": 71,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 71,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 71,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
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
                        "decorators": [],
                        "name": "MyFunction",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
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
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 101,
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "TemplateLiteral",
                    "start": 102,
                    "end": 124,
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
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 118,
                        "end": 121,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  }
                ],
                "optional": false
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 127,
      "end": 153,
      "declaration": {
        "type": "Identifier",
        "start": 142,
        "end": 152,
        "decorators": [],
        "name": "MyFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
