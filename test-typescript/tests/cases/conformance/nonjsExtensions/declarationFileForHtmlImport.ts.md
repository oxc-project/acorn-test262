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
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 255,
            "name": "doc",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 255,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 247,
                "end": 255,
                "typeName": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 255,
                  "name": "Document",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 257,
      "end": 276,
      "declaration": {
        "type": "Identifier",
        "start": 272,
        "end": 275,
        "name": "doc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 371,
      "end": 402,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 378,
        "end": 402,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 384,
            "end": 401,
            "id": {
              "type": "Identifier",
              "start": 384,
              "end": 401,
              "name": "blogPost",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 392,
                "end": 401,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 394,
                  "end": 401,
                  "typeName": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 401,
                    "name": "Element",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
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
      "type": "ExportNamedDeclaration",
      "start": 404,
      "end": 484,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 411,
        "end": 484,
        "id": {
          "type": "Identifier",
          "start": 417,
          "end": 429,
          "name": "HTML5Element",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 438,
          "end": 449,
          "name": "HTMLElement",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 450,
          "end": 484,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 456,
              "end": 482,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 456,
                "end": 473,
                "name": "connectedCallback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 473,
                "end": 482,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": null,
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 475,
                  "end": 481,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 477,
                    "end": 481
                  }
                }
              },
              "decorators": [],
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
  "end": 189,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "name": "mod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 39,
        "value": "./component.html",
        "raw": "\"./component.html\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 109,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 108,
        "callee": {
          "type": "MemberExpression",
          "start": 42,
          "end": 70,
          "object": {
            "type": "MemberExpression",
            "start": 42,
            "end": 63,
            "object": {
              "type": "Identifier",
              "start": 42,
              "end": 48,
              "name": "window",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 63,
              "name": "customElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 70,
            "name": "define",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 71,
            "end": 89,
            "value": "my-html5-element",
            "raw": "\"my-html5-element\""
          },
          {
            "type": "MemberExpression",
            "start": 91,
            "end": 107,
            "object": {
              "type": "Identifier",
              "start": 91,
              "end": 94,
              "name": "mod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 95,
              "end": 107,
              "name": "HTML5Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 111,
      "end": 189,
      "test": {
        "type": "BinaryExpression",
        "start": 115,
        "end": 139,
        "left": {
          "type": "Identifier",
          "start": 115,
          "end": 123,
          "name": "document",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "MemberExpression",
          "start": 128,
          "end": 139,
          "object": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
            "name": "mod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 139,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 141,
        "end": 189,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 147,
            "end": 187,
            "expression": {
              "type": "CallExpression",
              "start": 147,
              "end": 186,
              "callee": {
                "type": "MemberExpression",
                "start": 147,
                "end": 172,
                "object": {
                  "type": "MemberExpression",
                  "start": 147,
                  "end": 160,
                  "object": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 155,
                    "name": "document",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 160,
                    "name": "body",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 172,
                  "name": "appendChild",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 173,
                  "end": 185,
                  "object": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 176,
                    "name": "mod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 185,
                    "name": "blogPost",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
