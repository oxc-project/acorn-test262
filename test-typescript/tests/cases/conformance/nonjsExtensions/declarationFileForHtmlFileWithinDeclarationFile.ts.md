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
  "end": 41,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 40,
      "exported": {
        "type": "Identifier",
        "start": 12,
        "end": 15,
        "name": "mod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 39,
        "value": "./component.html",
        "raw": "\"./component.html\""
      },
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
  "end": 181,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "mod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "mod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 31,
        "value": "./file.js",
        "raw": "\"./file.js\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 34,
      "end": 101,
      "expression": {
        "type": "CallExpression",
        "start": 34,
        "end": 100,
        "callee": {
          "type": "MemberExpression",
          "start": 34,
          "end": 62,
          "object": {
            "type": "MemberExpression",
            "start": 34,
            "end": 55,
            "object": {
              "type": "Identifier",
              "start": 34,
              "end": 40,
              "name": "window",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 41,
              "end": 55,
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
            "start": 56,
            "end": 62,
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
            "start": 63,
            "end": 81,
            "value": "my-html5-element",
            "raw": "\"my-html5-element\""
          },
          {
            "type": "MemberExpression",
            "start": 83,
            "end": 99,
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 86,
              "name": "mod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 87,
              "end": 99,
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
      "start": 103,
      "end": 181,
      "test": {
        "type": "BinaryExpression",
        "start": 107,
        "end": 131,
        "left": {
          "type": "Identifier",
          "start": 107,
          "end": 115,
          "name": "document",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "MemberExpression",
          "start": 120,
          "end": 131,
          "object": {
            "type": "Identifier",
            "start": 120,
            "end": 123,
            "name": "mod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 131,
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
        "start": 133,
        "end": 181,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 179,
            "expression": {
              "type": "CallExpression",
              "start": 139,
              "end": 178,
              "callee": {
                "type": "MemberExpression",
                "start": 139,
                "end": 164,
                "object": {
                  "type": "MemberExpression",
                  "start": 139,
                  "end": 152,
                  "object": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 147,
                    "name": "document",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 152,
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
                  "start": 153,
                  "end": 164,
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
                  "start": 165,
                  "end": 177,
                  "object": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 168,
                    "name": "mod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 177,
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
