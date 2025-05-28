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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 255,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 255,
                  "decorators": [],
                  "name": "Document",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 378,
        "end": 402,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 384,
            "end": 401,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 401,
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null,
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
      "type": "ExportNamedDeclaration",
      "start": 404,
      "end": 484,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 411,
        "end": 484,
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
        "typeParameters": null,
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
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 450,
          "end": 484,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 456,
              "end": 482,
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
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 473,
                "end": 482,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                "body": null,
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 63,
              "decorators": [],
              "name": "customElements",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 70,
            "decorators": [],
            "name": "define",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 95,
              "end": 107,
              "decorators": [],
              "name": "HTML5Element",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "document",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 139,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
                    "decorators": [],
                    "name": "document",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 160,
                    "decorators": [],
                    "name": "body",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 172,
                  "decorators": [],
                  "name": "appendChild",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 173,
                  "end": 185,
                  "object": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 176,
                    "decorators": [],
                    "name": "mod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 185,
                    "decorators": [],
                    "name": "blogPost",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ],
              "optional": false
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
