__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 256,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 98,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 98,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 96,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 96,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 77,
                  "end": 93,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 82,
                    "decorators": [],
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 84,
                      "end": 92,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 92,
                        "decorators": [],
                        "name": "Attribs1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 99,
      "end": 142,
      "body": {
        "type": "TSInterfaceBody",
        "start": 118,
        "end": 142,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 121,
            "end": 140,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 123,
                "end": 132,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 124,
                  "end": 132,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 126,
                    "end": 132
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 139,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 135,
                "end": 139
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 117,
        "decorators": [],
        "name": "Attribs1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 181,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 150,
        "end": 180,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 150,
          "end": 180,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 157,
              "end": 177,
              "argument": {
                "type": "ObjectExpression",
                "start": 162,
                "end": 175,
                "properties": [
                  {
                    "type": "Property",
                    "start": 163,
                    "end": 174,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 166,
                      "end": 174,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 173,
                        "end": 174,
                        "raw": "0",
                        "value": 0
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 167,
                          "end": 168,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 151,
            "end": 156,
            "name": "test1"
          },
          "selfClosing": true,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 256,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 221,
        "end": 255,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 221,
          "end": 255,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 228,
              "end": 252,
              "argument": {
                "type": "ObjectExpression",
                "start": 233,
                "end": 250,
                "properties": [
                  {
                    "type": "Property",
                    "start": 234,
                    "end": 249,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 237,
                      "end": 249,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 244,
                        "end": 249,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 245,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 249,
                          "decorators": [],
                          "name": "len",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 238,
                          "end": 239,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 222,
            "end": 227,
            "name": "test1"
          },
          "selfClosing": true,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
