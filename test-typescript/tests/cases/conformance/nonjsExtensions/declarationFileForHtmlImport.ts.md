__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 230,
  "end": 485,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 255,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 255,
            "decorators": [],
            "name": "doc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 255,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 247,
                "end": 255,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 255,
                  "decorators": [],
                  "name": "Document",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 257,
      "end": 276,
      "declaration": {
        "type": "Identifier",
        "start": 272,
        "end": 275,
        "decorators": [],
        "name": "doc",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 371,
      "end": 402,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 378,
        "end": 402,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 384,
            "end": 401,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 384,
              "end": 401,
              "decorators": [],
              "name": "blogPost",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 392,
                "end": 401,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 394,
                  "end": 401,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 401,
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": null
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
      "type": "ExportNamedDeclaration",
      "start": 404,
      "end": 484,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 411,
        "end": 484,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 450,
          "end": 484,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 456,
              "end": 482,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 456,
                "end": 473,
                "decorators": [],
                "name": "connectedCallback",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 473,
                "end": 482,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 475,
                  "end": 481,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 477,
                    "end": 481
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 417,
          "end": 429,
          "decorators": [],
          "name": "HTML5Element",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 438,
          "end": 449,
          "decorators": [],
          "name": "HTMLElement",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "typeParameters": null
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
  "end": 189,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 39,
        "raw": "\"./component.html\"",
        "value": "./component.html"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 109,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 108,
        "arguments": [
          {
            "type": "Literal",
            "start": 71,
            "end": 89,
            "raw": "\"my-html5-element\"",
            "value": "my-html5-element"
          },
          {
            "type": "MemberExpression",
            "start": 91,
            "end": 107,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 91,
              "end": 94,
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 95,
              "end": 107,
              "decorators": [],
              "name": "HTML5Element",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 42,
          "end": 70,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 42,
            "end": 63,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 42,
              "end": 48,
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 63,
              "decorators": [],
              "name": "customElements",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 70,
            "decorators": [],
            "name": "define",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "IfStatement",
      "start": 111,
      "end": 189,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 141,
        "end": 189,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 147,
            "end": 187,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 147,
              "end": 186,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 173,
                  "end": 185,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 176,
                    "decorators": [],
                    "name": "mod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 185,
                    "decorators": [],
                    "name": "blogPost",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 147,
                "end": 172,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 147,
                  "end": 160,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 155,
                    "decorators": [],
                    "name": "document",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 160,
                    "decorators": [],
                    "name": "body",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 172,
                  "decorators": [],
                  "name": "appendChild",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 115,
        "end": 139,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 115,
          "end": 123,
          "decorators": [],
          "name": "document",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 128,
          "end": 139,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 139,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
