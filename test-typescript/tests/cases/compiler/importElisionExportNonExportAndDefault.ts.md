main.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 38,
        "raw": "\"./MyComponent\"",
        "value": "./MyComponent"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 74,
      "expression": {
        "type": "CallExpression",
        "start": 41,
        "end": 73,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 56,
                  "decorators": [],
                  "name": "msg",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 58,
                  "end": 71,
                  "raw": "\"Hello World\"",
                  "value": "Hello World"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 41,
          "end": 51,
          "decorators": [],
          "name": "MyFunction",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
MyComponent.ts
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
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "msg",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "MyFunction",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 126,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 126,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 125,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 62,
              "decorators": [],
              "name": "MyFunction",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 65,
              "end": 125,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 90,
                "end": 125,
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
                        "decorators": [],
                        "name": "msg",
                        "optional": false
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 102,
                        "end": 118,
                        "tail": false,
                        "value": {
                          "cooked": "Got message \"",
                          "raw": "Got message \""
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 121,
                        "end": 124,
                        "tail": true,
                        "value": {
                          "cooked": "\"",
                          "raw": "\""
                        }
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 90,
                  "end": 101,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 97,
                    "decorators": [],
                    "name": "console",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 101,
                    "decorators": [],
                    "name": "log",
                    "optional": false
                  }
                },
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 66,
                  "end": 85,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 68,
                      "end": 71,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 71,
                        "decorators": [],
                        "name": "msg",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 71,
                        "decorators": [],
                        "name": "msg",
                        "optional": false
                      }
                    }
                  ],
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
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
