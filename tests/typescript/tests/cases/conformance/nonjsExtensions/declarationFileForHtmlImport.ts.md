__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "doc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Document",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 255
                },
                "typeArguments": null,
                "start": 247,
                "end": 255
              },
              "start": 245,
              "end": 255
            },
            "start": 242,
            "end": 255
          },
          "init": null,
          "definite": false,
          "start": 242,
          "end": 255
        }
      ],
      "declare": true,
      "start": 230,
      "end": 256
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "doc",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 275
      },
      "exportKind": "value",
      "start": 257,
      "end": 276
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "blogPost",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 401
                  },
                  "typeArguments": null,
                  "start": 394,
                  "end": 401
                },
                "start": 392,
                "end": 401
              },
              "start": 384,
              "end": 401
            },
            "init": null,
            "definite": false,
            "start": 384,
            "end": 401
          }
        ],
        "declare": false,
        "start": 378,
        "end": 402
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 371,
      "end": 402
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTML5Element",
          "optional": false,
          "typeAnnotation": null,
          "start": 417,
          "end": 429
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTMLElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 449
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "connectedCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 473
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 477,
                    "end": 481
                  },
                  "start": 475,
                  "end": 481
                },
                "body": null,
                "expression": false,
                "start": 473,
                "end": 482
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 456,
              "end": 482
            }
          ],
          "start": 450,
          "end": 484
        },
        "abstract": false,
        "declare": false,
        "start": 411,
        "end": 484
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 404,
      "end": 484
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 230,
  "end": 485
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 15
          },
          "start": 7,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./component.html",
        "raw": "\"./component.html\"",
        "start": 21,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 48
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "customElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 63
            },
            "optional": false,
            "computed": false,
            "start": 42,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "define",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 70
          },
          "optional": false,
          "computed": false,
          "start": 42,
          "end": 70
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "my-html5-element",
            "raw": "\"my-html5-element\"",
            "start": 71,
            "end": 89
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 94
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "HTML5Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 107
            },
            "optional": false,
            "computed": false,
            "start": 91,
            "end": 107
          }
        ],
        "optional": false,
        "start": 42,
        "end": 108
      },
      "directive": null,
      "start": 42,
      "end": 109
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "document",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 123
        },
        "operator": "!==",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 139
          },
          "optional": false,
          "computed": false,
          "start": 128,
          "end": 139
        },
        "start": 115,
        "end": 139
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "document",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 155
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "body",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 160
                  },
                  "optional": false,
                  "computed": false,
                  "start": 147,
                  "end": 160
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "appendChild",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 172
                },
                "optional": false,
                "computed": false,
                "start": 147,
                "end": 172
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 176
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "blogPost",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 185
                  },
                  "optional": false,
                  "computed": false,
                  "start": 173,
                  "end": 185
                }
              ],
              "optional": false,
              "start": 147,
              "end": 186
            },
            "directive": null,
            "start": 147,
            "end": 187
          }
        ],
        "start": 141,
        "end": 189
      },
      "alternate": null,
      "start": 111,
      "end": 189
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 189
}
```
